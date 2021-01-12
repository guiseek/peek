import { PeerEvent, Signaling } from '@peek/core/model'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { getUserMedia } from '@peek/core/model'
import { Component } from '@angular/core'

@Component({ template: '' })
export class Room {
  destroy$ = new Subject<void>()

  protected pc: RTCPeerConnection
  sender: string

  /**
   * manter o controle de algum estado de
   * negociação para evitar corridas e erros
   */
  makingOffer = false
  ignoreOffer = false
  isSettingRemoteAnswerPending = false

  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  stream: MediaStream

  selfView: HTMLVideoElement
  remoteView: HTMLVideoElement

  constructor(protected signaling: Signaling) {}

  start = async () => {
    try {
      this.stream = await getUserMedia({ audio: true, video: true })
      for (const track of this.stream.getTracks()) {
        this.pc.addTrack(track, this.stream)
      }
      this.selfView.srcObject = this.stream
      this.selfView.muted = true
    } catch (err) {
      console.error(err)
    }
  }

  async makeOffer(options?: RTCOfferOptions) {
    try {
      this.makingOffer = true
      await this.pc.setLocalDescription(await this.pc.createOffer(options))
      if (this.pc.localDescription) {
        this.signaling.send({
          sender: this.sender,
          description: this.pc.localDescription,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.makingOffer = false
    }
  }

  //  A lógica de negociação perfeita, separada do resto da aplicação
  afterViewComplete() {
    // enviar qualquer candidato de gelo para o outro par
    this.pc.addEventListener('icecandidate', ({ candidate }) => {
      if (candidate) {
        this.signaling.send({ sender: this.sender, candidate })
      }
    })

    // deixe o evento "necessário para a negociação" gerar a oferta
    this.pc.addEventListener('negotiationneeded', async () => {
      this.makeOffer(this.offerOptions)
    })

    this.signaling.message$
      .pipe(takeUntil(this.destroy$))
      .subscribe(async ({ sender, description, candidate }) => {
        console.log('sender: ', sender)
        try {
          if (description) {
            // Uma oferta pode chegar enquanto estamos ocupados processando SRD (resposta).
            // Nesse caso, estaremos "estáveis" no momento em que a oferta for processada
            // então é seguro encadear em nossa Cadeia de Operações agora.
            const readyForOffer =
              !this.makingOffer &&
              (this.pc.signalingState == 'stable' ||
                this.isSettingRemoteAnswerPending)
            const offerCollision =
              description.type == PeerEvent.Offer && !readyForOffer

            const polite = sender === this.sender

            this.ignoreOffer = polite && offerCollision
            if (this.ignoreOffer) {
              return
            }
            this.isSettingRemoteAnswerPending =
              description.type == PeerEvent.Answer

            await this.pc.setRemoteDescription(description) // SRD reverte conforme necessário

            this.isSettingRemoteAnswerPending = false

            if (description.type == PeerEvent.Offer) {
              await this.pc.setLocalDescription(await this.pc.createAnswer())
              if (this.pc.localDescription) {
                this.signaling.send({ description: this.pc.localDescription })
              }
            }
          } else if (candidate) {
            try {
              await this.pc.addIceCandidate(candidate)
            } catch (err) {
              if (!this.ignoreOffer) throw err // Suprimir os candidatos da oferta ignorada
            }
          }
        } catch (err) {
          console.error(err)
        }
      })
  }

  hangup() {
    console.log('Ending call')
    this.stream.getTracks().forEach((t) => t.stop())
    if (this.pc) {
      this.pc.close()
      Object.defineProperties(this.pc, {})
    }
  }

  ngOnDestroy() {
    this.hangup()
    this.destroy$.next()
    this.destroy$.complete()
  }
}

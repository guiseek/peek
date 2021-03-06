/**
 *
 * @param CreateOrJoin
 * Sempre o primeiro a ser emitido, se a sala estiver vazia, deve emitir `Created` ou se já houver alguém emite `Joined`, se emitirá `Full`
 *
 * @param Created Pode ser o segundo emitido, caso uma sala
 * @param Ready
 * @param Joined
 * @param Full
 * @param Candidate
 * @param Offer
 * @param Answer
 *
 * @export
 * @enum {number}
 */
export enum PeekAction {
  CreateOrJoin = 'create or join',
  Created = 'created',
  Exited = 'exited',
  Ready = 'ready',
  Joined = 'joined',
  Full = 'full',
  Candidate = 'candidate',
  Offer = 'offer',
  Answer = 'answer',
  Audio = 'audio',
  Video = 'video',
}

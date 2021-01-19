import {
  MessageBody,
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { PeerAction } from '@peek/core/model'
import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class RoomGateway implements OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  @SubscribeMessage(PeerAction.CreateOrJoin)
  createOrJoin(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: string
  ) {
    console.log('create or join to room ', peerContact)
    const { rooms } = this.server.sockets.adapter
    const peerRoom = rooms[peerContact] ?? { length: 0 }
    const numPeers = peerRoom.length
    console.log(`${peerContact} has ${numPeers} clients`)

    if (numPeers == 0) {
      contact.join(peerContact)
      contact.emit(PeerAction.Created, peerContact)
    } else if (numPeers == 1) {
      contact.join(peerContact)
      console.log('join: ', peerContact);

      contact.emit(PeerAction.Joined, peerContact)
    } else {
      contact.emit(PeerAction.Full, peerContact)
    }
  }

  @SubscribeMessage(PeerAction.Ready)
  ready(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: string
  ) {
    contact.broadcast.to(peerContact).emit(PeerAction.Ready)
  }

  @SubscribeMessage(PeerAction.Candidate)
  candidate(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: { room: string; cancidate: any }
  ) {
    contact.broadcast
      .to(peerContact.room)
      .emit(PeerAction.Candidate, peerContact)
  }

  @SubscribeMessage(PeerAction.Offer)
  offer(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: { room: string; sdp: any }
  ) {
    contact.broadcast
      .to(peerContact.room)
      .emit(PeerAction.Offer, peerContact.sdp)
  }

  @SubscribeMessage(PeerAction.Answer)
  answer(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: { room: string; sdp: any }
  ) {
    contact.broadcast
      .to(peerContact.room)
      .emit(PeerAction.Answer, peerContact.sdp)
  }


  @SubscribeMessage('rooms')
  getRooms(
    @ConnectedSocket() contact: Socket,
    @MessageBody() peerContact: string
  ) {
    console.log('create or join to room ', peerContact)
    const { rooms } = this.server.sockets.adapter
    const peerRoom = rooms[peerContact] ?? { length: 0 }
    const numPeers = peerRoom.length

    console.log(`${peerContact} has ${numPeers} clients`)
    contact.broadcast.emit('rooms', rooms)
  }

  handleDisconnect(@ConnectedSocket() contact: Socket) {
    console.log('DISCONNCET', contact.id);
    const { rooms } = this.server.sockets.adapter
    if (rooms[contact.id]) {
      contact.leaveAll()
    }
  }
}
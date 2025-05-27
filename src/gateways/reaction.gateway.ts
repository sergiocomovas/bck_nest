import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: "*", // Permite conexiones desde cualquier frontend, ideal para pruebas
    }
  })
  export class ReactionGateway {
    @WebSocketServer()
    server: Server;
  
    // Recibe la reacción del cliente
    @SubscribeMessage('sendReaction')
    handleReaction(@MessageBody() data: { emoji: string }) {
      // Vuelve a emitir la reacción a todos los conectados
      this.server.emit('newReaction', data);
    }
  }
  
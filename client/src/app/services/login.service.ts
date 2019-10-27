import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { MessageSocket } from '../../models/messages/MessageSocket';
import { packetManager } from '../../helpers/PacketManager';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isConnected = false;

  private socket: WebSocketSubject<MessageSocket>;

  constructor() {
    this.socket = new WebSocketSubject('ws://localhost:8999');
  }

  public connect(): void {
    this.isConnected = true;

    this.socket
      .subscribe(
        (message) => {
          console.log(message);
          this.analyze(message);
        },
        (err) => {
          console.error(err);
        }
      );
  }

  public send(): void {
    const message = new MessageSocket('O');
    this.socket.next(message);
  }

  public disconnect(): void {
    this.isConnected = false;
    this.socket.unsubscribe();
  }

  private analyze(message: MessageSocket) {
    packetManager.analyze(message.packetId, message.packetMessage);
  }
}

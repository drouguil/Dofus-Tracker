import { Component, Input } from '@angular/core';
import { ChatTackleMessage } from '../../../../models/chat/ChatTackleMessage';

@Component({
  selector: 'app-chat-tackle-message',
  templateUrl: './chat-tackle-message.component.html',
  styleUrls: ['./chat-tackle-message.component.scss']
})
export class ChatTackleMessageComponent {

  @Input() message: ChatTackleMessage;

  constructor() { }

}

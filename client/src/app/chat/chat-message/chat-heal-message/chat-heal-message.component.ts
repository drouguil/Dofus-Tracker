import { Component, Input } from '@angular/core';
import { ChatHealMessage } from '../../../../models/chat/ChatHealMessage';

@Component({
  selector: 'app-chat-heal-message',
  templateUrl: './chat-heal-message.component.html',
  styleUrls: ['./chat-heal-message.component.scss']
})
export class ChatHealMessageComponent {

  @Input() message: ChatHealMessage;

  constructor() { }
}

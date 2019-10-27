import { Component, Input, OnInit } from '@angular/core';
import { ChatBuffMessage } from '../../../../models/chat/ChatBuffMessage';

@Component({
  selector: 'app-chat-buff-message',
  templateUrl: './chat-buff-message.component.html',
  styleUrls: ['./chat-buff-message.component.scss']
})
export class ChatBuffMessageComponent implements OnInit {

  @Input() message: ChatBuffMessage;

  public duration: number;

  constructor() { }

  public ngOnInit(): void {
    this.duration = this.message.buff.startDuration;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ChatSpellBoostBuffMessage } from '../../../../models/chat/ChatSpellBoostBuffMessage';

@Component({
  selector: 'app-chat-spell-boost-buff-message',
  templateUrl: './chat-spell-boost-buff-message.component.html',
  styleUrls: ['./chat-spell-boost-buff-message.component.scss']
})
export class ChatSpellBoostBuffMessageComponent implements OnInit {

  @Input() message: ChatSpellBoostBuffMessage;

  public duration: number;

  constructor() { }

  public ngOnInit(): void {
    this.duration = this.message.buff.startDuration;
  }

}

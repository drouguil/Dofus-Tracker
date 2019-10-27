import { Component, Input, OnInit } from '@angular/core';
import { ChatBoostBuffMessage } from '../../../../models/chat/ChatBoostBuffMessage';
import { ActionEnum } from '../../../../../../enums/ActionEnum';

@Component({
  selector: 'app-chat-boost-buff-message',
  templateUrl: './chat-boost-buff-message.component.html',
  styleUrls: ['./chat-boost-buff-message.component.scss']
})
export class ChatBoostBuffMessageComponent implements OnInit {

  @Input() message: ChatBoostBuffMessage;

  public delta = '';
  public duration: number;

  constructor() { }

  public ngOnInit(): void {
    this.duration = this.message.buff.startDuration;
    this.delta = this.message.buff.sign;
    this.delta += this.message.buff.delta.toString();
  }

}

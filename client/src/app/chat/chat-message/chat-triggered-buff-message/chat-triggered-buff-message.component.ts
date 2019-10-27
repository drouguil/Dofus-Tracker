import { Component, Input, OnInit } from '@angular/core';
import { ChatTriggeredBuffMessage } from '../../../../models/chat/ChatTriggeredBuffMessage';
import { SendSpellEffect } from '../../../../models/fight/buff/effect/SendSpellEffect';
import { HitEffect } from '../../../../models/fight/buff/effect/HitEffect';
import { SetStateEffect } from '../../../../models/fight/buff/effect/SetStateEffect';

@Component({
  selector: 'app-chat-triggered-buff-message',
  templateUrl: './chat-triggered-buff-message.component.html',
  styleUrls: ['./chat-triggered-buff-message.component.scss']
})
export class ChatTriggeredBuffMessageComponent implements OnInit {

  @Input() message: ChatTriggeredBuffMessage;

  public duration: number;
  public delay: number;

  constructor() { }

  public ngOnInit(): void {
    this.duration = this.message.buff.startDuration;
    this.delay = this.message.buff.startDelay;
  }

  public isSendSpellEffect(): boolean {
    return this.message.buff.effect instanceof SendSpellEffect;
  }

  public isHitEffect(): boolean {
    return this.message.buff.effect instanceof HitEffect;
  }

  public isSetStateEffect(): boolean {
    return this.message.buff.effect instanceof SetStateEffect;
  }

}

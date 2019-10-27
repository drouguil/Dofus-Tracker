import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../../models/chat/ChatMessage';
import { ChatMoveMessage } from '../../../models/chat/ChatMoveMessage';
import { ChatTeleportMessage } from '../../../models/chat/ChatTeleportMessage';
import { ChatSlideMessage } from '../../../models/chat/ChatSlideMessage';
import { ChatCastSpellMessage } from '../../../models/chat/ChatCastSpellMessage';
import { ChatWeaponMessage } from '../../../models/chat/ChatWeaponMessage';
import { ChatHealMessage } from '../../../models/chat/ChatHealMessage';
import { ChatHitMessage } from '../../../models/chat/ChatHitMessage';
import { ChatBuffMessage } from '../../../models/chat/ChatBuffMessage';
import { ChatBoostBuffMessage } from '../../../models/chat/ChatBoostBuffMessage';
import { ChatSpellBoostBuffMessage } from '../../../models/chat/ChatSpellBoostBuffMessage';
import { ChatTriggeredBuffMessage } from '../../../models/chat/ChatTriggeredBuffMessage';
import { ChatStateBoostBuffMessage } from '../../../models/chat/ChatStateBoostBuffMessage';
import { ChatTackleMessage } from '../../../models/chat/ChatTackleMessage';
import { ChatDodgeMessage } from '../../../models/chat/ChatDodgeMessage';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {

  @Input() message: ChatMessage;

  constructor() { }

  public isMoveMessage(): boolean {
    return this.message instanceof ChatMoveMessage;
  }

  public isTeleportMessage(): boolean {
    return this.message instanceof ChatTeleportMessage;
  }

  public isSlideMessage(): boolean {
    return this.message instanceof ChatSlideMessage;
  }

  public isCastSpellMessage(): boolean {
    return this.message instanceof ChatCastSpellMessage;
  }

  public isWeaponMessage(): boolean {
    return this.message instanceof ChatWeaponMessage;
  }

  public isHealMessage(): boolean {
    return this.message instanceof ChatHealMessage;
  }

  public isHitMessage(): boolean {
    return this.message instanceof ChatHitMessage;
  }

  public isBuffMessage(): boolean {
    return this.message instanceof ChatBuffMessage;
  }

  public isBoostBuffMessage(): boolean {
    return this.message instanceof ChatBoostBuffMessage;
  }

  public isSpellBoostBuffMessage(): boolean {
    return this.message instanceof ChatSpellBoostBuffMessage;
  }

  public isStateBoostBuffMessage(): boolean {
    return this.message instanceof ChatStateBoostBuffMessage;
  }

  public isTriggeredBuffMessage(): boolean {
    return this.message instanceof ChatTriggeredBuffMessage;
  }

  public isTackleMessage(): boolean {
    return this.message instanceof ChatTackleMessage;
  }

  public isDodgeMessage(): boolean {
    return this.message instanceof ChatDodgeMessage;
  }

}

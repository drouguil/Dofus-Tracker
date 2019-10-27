import { Component, OnInit, Input } from '@angular/core';
import { ChatDodgeMessage } from '../../../../models/chat/ChatDodgeMessage';
import { ActionEnum } from '../../../../../../enums/ActionEnum';

@Component({
  selector: 'app-chat-dodge-message',
  templateUrl: './chat-dodge-message.component.html',
  styleUrls: ['./chat-dodge-message.component.scss']
})
export class ChatDodgeMessageComponent implements OnInit {

  @Input() message: ChatDodgeMessage;
  public dodgeType: string;

  constructor() { }

  public ngOnInit(): void {
    switch (this.message.action) {
      case ActionEnum.FIGHT_SPELL_DODGED_AP:
        this.dodgeType = 'dodge_ap';
        break;
      case ActionEnum.FIGHT_SPELL_DODGED_MP:
        this.dodgeType = 'dodge_mp';
        break;
      default:
        console.error(this.message.action);
        break;
    }
  }

}

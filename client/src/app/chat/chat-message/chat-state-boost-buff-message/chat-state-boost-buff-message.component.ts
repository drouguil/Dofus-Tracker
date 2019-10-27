import { Component, Input, OnInit } from '@angular/core';
import { ChatStateBoostBuffMessage } from '../../../../models/chat/ChatStateBoostBuffMessage';
import { ActionEnum } from '../../../../../../enums/ActionEnum';
import { SpellStateEnum } from '../../../../../../enums/SpellStateEnum';

@Component({
  selector: 'app-chat-state-boost-buff-message',
  templateUrl: './chat-state-boost-buff-message.component.html',
  styleUrls: ['./chat-state-boost-buff-message.component.scss']
})
export class ChatStateBoostBuffMessageComponent implements OnInit {

  @Input() message: ChatStateBoostBuffMessage;

  public stateImage: string;
  public stateName: string;
  public stateLength: string;
  public duration: number;

  constructor() { }

  public ngOnInit(): void {
    this.duration = this.message.buff.startDuration;

    if (SpellStateEnum[this.message.buff.state]) {
    this.stateName = SpellStateEnum[this.message.buff.state].toString().toLowerCase();
      const array: string[] = this.stateName.split('_');
      this.stateName = '';

      for (let index = 0; index < array.length; index++) {
        let element = array[index];
        const firstLetter = element.charAt(0).toUpperCase();
        const allString = element.substring(1);
        element = firstLetter + allString;
        this.stateName += element;
        if (index < array.length - 1) {
          this.stateName += ' ';
        }
      }

      if (this.stateName.length >= 10) {
        this.stateLength = 'length-' + Math.floor((this.stateName.length - 10) / 4);
      }
    }

    switch (this.message.buff.action) {
      case ActionEnum.FIGHT_SET_STATE:
        break;
      default:
        console.error(this.message.buff.action);
        break;
    }
  }

}

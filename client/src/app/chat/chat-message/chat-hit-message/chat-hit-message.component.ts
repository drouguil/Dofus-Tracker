import { Component, OnInit, Input } from '@angular/core';
import { ChatHitMessage } from '../../../../models/chat/ChatHitMessage';
import { ActionEnum } from '../../../../../../enums/ActionEnum';
import { ElementEnum } from '../../../../../../enums/ElementEnum';

@Component({
  selector: 'app-chat-hit-message',
  templateUrl: './chat-hit-message.component.html',
  styleUrls: ['./chat-hit-message.component.scss']
})
export class ChatHitMessageComponent implements OnInit {

  @Input() message: ChatHitMessage;

  public hitImage: string;
  public hitType: string;

  constructor() { }

  ngOnInit() {
    const element: string = ElementEnum[this.message.element];
    if (element) {
      this.hitType = element.toLowerCase();
    } else {
      this.hitType = element;
    }

    let src = '../../assets/img/chat/';
    let isFound = true;
    switch (this.message.action) {
      case ActionEnum.CHARACTER_HIT_NEUTRAL:
      case ActionEnum.CHARACTER_HIT_EARTH:
      case ActionEnum.CHARACTER_HIT_FIRE:
      case ActionEnum.CHARACTER_HIT_WATER:
      case ActionEnum.CHARACTER_HIT_AIR:
      case ActionEnum.CHARACTER_HIT_PUSHBACK:
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_STEAL_NEUTRAL:
      case ActionEnum.CHARACTER_STEAL_EARTH:
      case ActionEnum.CHARACTER_STEAL_FIRE:
      case ActionEnum.CHARACTER_STEAL_WATER:
      case ActionEnum.CHARACTER_STEAL_AIR:
        src += 'steal';
        break;
      default:
        src += 'cross';
        isFound = false;
        break;
    }
    if (isFound) {
      src += '_' + this.hitType;
    }
    src += '.png';
    this.hitImage = src;
  }
}

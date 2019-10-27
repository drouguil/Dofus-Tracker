import { Component, OnInit, Input } from '@angular/core';
import { HitEffect } from '../../../../../models/fight/buff/effect/HitEffect';
import { ElementEnum } from '../../../../../../../enums/ElementEnum';
import { ActionEnum } from '../../../../../../../enums/ActionEnum';

@Component({
  selector: 'app-chat-hit-effect',
  templateUrl: './chat-hit-effect.component.html',
  styleUrls: ['./chat-hit-effect.component.scss']
})
export class ChatHitEffectComponent implements OnInit {

  @Input() effect: HitEffect;

  public element: ElementEnum;
  public hitImage: string;

  constructor() { }

  ngOnInit() {
    let src = '../../assets/img/chat/';
    let isFound = true;
    switch (this.effect.action) {
      case ActionEnum.CHARACTER_HIT_NEUTRAL:
        this.element = ElementEnum.NEUTRAL;
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_HIT_EARTH:
        this.element = ElementEnum.EARTH;
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_HIT_FIRE:
        this.element = ElementEnum.FIRE;
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_HIT_WATER:
        this.element = ElementEnum.WATER;
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_HIT_AIR:
        this.element = ElementEnum.AIR;
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_STEAL_NEUTRAL:
        this.element = ElementEnum.NEUTRAL;
        src += 'steal';
        break;
      case ActionEnum.CHARACTER_STEAL_EARTH:
        this.element = ElementEnum.EARTH;
        src += 'steal';
        break;
      case ActionEnum.CHARACTER_STEAL_FIRE:
        this.element = ElementEnum.FIRE;
        src += 'steal';
        break;
      case ActionEnum.CHARACTER_STEAL_WATER:
        this.element = ElementEnum.WATER;
        src += 'steal';
        break;
      case ActionEnum.CHARACTER_STEAL_AIR:
        this.element = ElementEnum.AIR;
        src += 'steal';
        break;
      default:
        src += 'cross';
        isFound = false;
        break;
    }
    if (isFound) {
      src += '_' + this.getHitClassName();
    }
    src += '.png';
    this.hitImage = src;
  }

  public getHitClassName(): string {
    const element: string = ElementEnum[this.element];
    if (element) {
      return element.toLowerCase();
    } else {
      return element;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SetStateEffect } from '../../../../../models/fight/buff/effect/SetStateEffect';
import { SpellStateEnum } from '../../../../../../../enums/SpellStateEnum';

@Component({
  selector: 'app-chat-set-state-effect',
  templateUrl: './chat-set-state-effect.component.html',
  styleUrls: ['./chat-set-state-effect.component.scss']
})
export class ChatSetStateEffectComponent implements OnInit {

  @Input() effect: SetStateEffect;

  public stateName: string;
  public stateLength: string;

  constructor() { }

  ngOnInit() {
    if (SpellStateEnum[this.effect.state]) {
      this.stateName = SpellStateEnum[this.effect.state].toString().toLowerCase();
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
  }

}

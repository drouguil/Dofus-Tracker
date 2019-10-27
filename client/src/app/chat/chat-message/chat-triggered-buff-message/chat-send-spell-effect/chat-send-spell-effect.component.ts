import { Component, OnInit, Input } from '@angular/core';
import { SendSpellEffect } from '../../../../../models/fight/buff/effect/SendSpellEffect';
import { Spell } from '../../../../../models/fight/Spell';

@Component({
  selector: 'app-chat-send-spell-effect',
  templateUrl: './chat-send-spell-effect.component.html',
  styleUrls: ['./chat-send-spell-effect.component.scss']
})
export class ChatSendSpellEffectComponent implements OnInit {

  @Input() effect: SendSpellEffect;

  public spellLength: string;

  constructor() { }

  ngOnInit() {
    if (this.effect.spell instanceof Spell) {
      if (this.effect.spell.name.length >= 10) {
        this.spellLength = 'length-' + Math.floor((this.effect.spell.name.length - 10) / 4);
      }
    }
  }

}

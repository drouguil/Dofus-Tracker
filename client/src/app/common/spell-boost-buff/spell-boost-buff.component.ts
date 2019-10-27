import { Component, Input } from '@angular/core';
import { SpellBoostBuff } from '../../../models/fight/buff/SpellBoostBuff';

@Component({
  selector: 'app-spell-boost-buff',
  templateUrl: './spell-boost-buff.component.html',
  styleUrls: ['./spell-boost-buff.component.scss']
})
export class SpellBoostBuffComponent {

  @Input() buff: SpellBoostBuff;

  constructor() { }

}

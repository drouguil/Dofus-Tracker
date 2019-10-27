import { Component, Input } from '@angular/core';
import { StateBoostBuff } from '../../../models/fight/buff/StateBoostBuff';

@Component({
  selector: 'app-state-boost-buff',
  templateUrl: './state-boost-buff.component.html',
  styleUrls: ['./state-boost-buff.component.scss']
})
export class StateBoostBuffComponent {

  @Input() buff: StateBoostBuff;

  constructor() { }

}

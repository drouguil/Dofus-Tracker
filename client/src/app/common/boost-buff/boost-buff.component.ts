import { Component, Input } from '@angular/core';
import { BoostBuff } from '../../../models/fight/buff/BoostBuff';

@Component({
  selector: 'app-boost-buff',
  templateUrl: './boost-buff.component.html',
  styleUrls: ['./boost-buff.component.scss']
})
export class BoostBuffComponent {

  @Input() buff: BoostBuff;

  constructor() { }

}

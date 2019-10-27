import { Component, Input } from '@angular/core';
import { TriggeredBuff } from '../../../models/fight/buff/TriggeredBuff';

@Component({
  selector: 'app-triggered-buff',
  templateUrl: './triggered-buff.component.html',
  styleUrls: ['./triggered-buff.component.scss']
})
export class TriggeredBuffComponent {

  @Input() buff: TriggeredBuff;

  constructor() { }

}

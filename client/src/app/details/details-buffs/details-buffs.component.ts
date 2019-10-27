import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-details-buffs',
  templateUrl: './details-buffs.component.html',
  styleUrls: ['./details-buffs.component.scss']
})
export class DetailsBuffsComponent {

  @Input() entity: Entity;

  constructor() { }

}

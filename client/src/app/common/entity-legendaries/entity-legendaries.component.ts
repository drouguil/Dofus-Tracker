import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-entity-legendaries',
  templateUrl: './entity-legendaries.component.html',
  styleUrls: ['./entity-legendaries.component.scss']
})
export class EntityLegendariesComponent {

  @Input() entity: Entity;

  constructor() { }

}

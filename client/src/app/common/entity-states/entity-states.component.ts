import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-entity-states',
  templateUrl: './entity-states.component.html',
  styleUrls: ['./entity-states.component.scss']
})
export class EntityStatesComponent {

  @Input() entity: Entity;

  constructor() { }

}

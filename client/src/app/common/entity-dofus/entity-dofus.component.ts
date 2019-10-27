import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-entity-dofus',
  templateUrl: './entity-dofus.component.html',
  styleUrls: ['./entity-dofus.component.scss']
})
export class EntityDofusComponent {

  @Input() entity: Entity;

  constructor() { }

}

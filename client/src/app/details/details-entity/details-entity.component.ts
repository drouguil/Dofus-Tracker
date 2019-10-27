import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-details-entity',
  templateUrl: './details-entity.component.html',
  styleUrls: ['./details-entity.component.scss']
})
export class DetailsEntityComponent {

  @Input() entity: Entity;

  constructor() { }

}

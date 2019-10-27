import { Component, Input } from '@angular/core';
import { Entity } from '../../../../models/fight/entity/Entity';

@Component({
  selector: 'app-overlay-entity',
  templateUrl: './overlay-entity.component.html',
  styleUrls: ['./overlay-entity.component.scss']
})
export class OverlayEntityComponent {

  @Input() entity: Entity;

  constructor() {
  }

}

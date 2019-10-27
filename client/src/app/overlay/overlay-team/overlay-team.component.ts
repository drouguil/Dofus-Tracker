import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-overlay-team',
  templateUrl: './overlay-team.component.html',
  styleUrls: ['./overlay-team.component.scss']
})
export class OverlayTeamComponent {

  @Input() team: Entity[];

  constructor() {
  }

}

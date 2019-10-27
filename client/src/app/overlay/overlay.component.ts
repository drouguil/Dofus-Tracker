import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { Entity } from '../../models/fight/entity/Entity';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  public teamRed: Entity[];
  public teamBlue: Entity[];

  constructor(private overlayService: OverlayService) {
    this.teamRed = this.overlayService.teamRed;
    this.teamBlue = this.overlayService.teamBlue;
  }

}

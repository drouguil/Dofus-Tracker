import { Component, OnInit } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  constructor(private timelineService: TimelineService) {
  }

  public getTurn(): number {
    return this.timelineService.turn;
  }

  public getTimeline(): Entity[] {
    return this.timelineService.getTimeline();
  }
}

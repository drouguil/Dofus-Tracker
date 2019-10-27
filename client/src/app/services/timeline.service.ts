import { Injectable } from '@angular/core';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from './fight.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  static instance: TimelineService;
  public turn: number;
  public ids: number[];

  constructor() {
    TimelineService.instance = this;
    this.turn = 0;
    this.ids = new Array();
  }

  public nextTurn() {
    this.turn++;
  }

  public endFight() {
    this.turn = 0;
  }

  public sortEntities(entities: Map<number, Entity>) {
    if (entities.size > 0) {
      entities[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => {
          return a[1].stats.initiative - b[1].stats.initiative;
        });
      };
      const ids = new Array();
      entities.forEach((entity: Entity, id: number) => {
        ids.push(id);
      });
      this.ids = ids;
    }
  }

  public getTimeline(): Entity[] {
    const timeline: Entity[] = new Array();
    this.ids.forEach((id: number) => {
      const entity: Entity | undefined = FightService.instance.getEntityById(id);
      if (entity) {
        timeline.push(entity);
      }
    });
    return timeline;
  }

  public setTimeline(ids: number[]): any {
    this.ids = ids;
    this.ids.forEach((id: number) => {
      const entity = FightService.instance.getEntityById(id);
      if (entity && entity.isStatic) {
        entity.isStatic = false;
      }
    });
  }
}

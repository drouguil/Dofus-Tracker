import { Injectable } from '@angular/core';
import { Entity } from '../../models/fight/entity/Entity';
import { TeamFightEnum } from '../../../../enums/TeamFightEnum';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  static instance: OverlayService;

  public teamRed: Entity[];
  public teamBlue: Entity[];

  constructor() {
    OverlayService.instance = this;
    this.teamRed = new Array();
    this.teamBlue = new Array();
  }

  public addEntityRed(entity: Entity): void {
    if (!this.teamRed.find(entityRed => entity.id === entityRed.id)) {
      this.teamRed.push(entity);
    }
  }

  public addEntityBlue(entity: Entity): void {
    if (!this.teamBlue.find(entityBlue => entity.id === entityBlue.id)) {
      this.teamBlue.push(entity);
    }
  }

  public addEntity(entity: Entity): void {
    switch (entity.team) {
      case TeamFightEnum.BLUE:
        this.addEntityBlue(entity);
        break;
      case TeamFightEnum.RED:
        this.addEntityRed(entity);
        break;
      default:
        console.error(entity);
        break;
    }
  }

  public endFight() {
    this.teamRed.splice(0, this.teamRed.length);
    this.teamBlue.splice(0, this.teamBlue.length);
  }
}

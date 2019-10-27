import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { ChatService } from './chat.service';
import { TimelineService } from './timeline.service';
import { Entity } from '../../models/fight/entity/Entity';
import { DetailsService } from './details.service';
import { OverlayService } from './overlay.service';
import { SequenceService } from './sequence.service';
import { Buff } from '../../models/fight/buff/Buff';
import { BoostBuff } from '../../models/fight/buff/BoostBuff';
import { Spell } from '../../models/fight/Spell';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  static instance: FightService;

  public isFight = false;
  public isFightStarted = false;

  private entities: Map<number, Entity>;
  private buffs: Map<number, Buff>;

  constructor(
    private timelineService: TimelineService,
    private mapService: MapService,
    private chatService: ChatService,
    private detailsService: DetailsService,
    private overlayService: OverlayService,
    public sequenceService: SequenceService
  ) {
    FightService.instance = this;
    this.entities = new Map();
    this.buffs = new Map();
  }

  public setEntity(entity: Entity) {
    this.entities.set(entity.id, entity);
    this.timelineService.sortEntities(this.entities);
  }

  public getEntityById(id: number): Entity | undefined {
    return this.entities.get(id);
  }

  public setBuff(buff: Buff): void {
    if (!this.buffs.get(buff.id)) {
      this.buffs.set(buff.id, buff);
    }
  }

  public getBuffsBySpellId(spellId: number): Buff[] {
    const buffs: Buff[] = new Array();
    this.buffs.forEach((buff: Buff) => {
      if (buff.spell instanceof Spell && buff.spell.id === spellId) {
        buffs.push(buff);
      } else if (buff.spell === spellId) {
        buffs.push(buff);
      }
    });
    return buffs;
  }

  public getBuffById(id: number): Buff | undefined {
    return this.buffs.get(id);
  }

  public deleteBoostById(boostUID: number): void {
    this.buffs.delete(boostUID);
  }

  public updateBoostBuff(id: number, delta: number): any {
    const buff = this.buffs.get(id);
    if (buff && buff instanceof BoostBuff) {
      buff.updateDelta(delta);
    }
  }

  public deathEntity(entity: Entity): any {
    const idsToRemove: number[] = new Array();

    this.buffs.forEach((buff: Buff, id: number) => {
      if (buff.deathEntity(entity)) {
        idsToRemove.push(id);
      }
    });

    idsToRemove.forEach((id: number) => {
      this.buffs.delete(id);
    });
  }

  public endFight(): void {
    this.isFight = false;
    this.isFightStarted = false;
    this.entities.clear();
    this.buffs.clear();
    this.mapService.endFight();
    this.timelineService.endFight();
    this.overlayService.endFight();
    this.chatService.endFight();
  }

  public reduceBuff(entity: Entity): any {
    const idsToRemove: number[] = new Array();

    this.buffs.forEach((buff: Buff, id: number) => {
      if (buff.reduceBuff(entity)) {
        idsToRemove.push(id);
      }
    });

    idsToRemove.forEach((id: number) => {
      this.buffs.delete(id);
    });
  }
}

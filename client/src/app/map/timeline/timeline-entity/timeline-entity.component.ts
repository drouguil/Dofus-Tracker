import { Component, Input } from '@angular/core';
import { Entity } from '../../../../models/fight/entity/Entity';
import { TeamFightEnum } from '../../../../../../enums/TeamFightEnum';
import { DetailsService } from '../../../../app/services/details.service';
import { BreedEntity } from '../../../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../../../models/fight/entity/MonsterEntity';

@Component({
  selector: 'app-timeline-entity',
  templateUrl: './timeline-entity.component.html',
  styleUrls: ['./timeline-entity.component.scss']
})
export class TimelineEntityComponent {

  @Input() entity: Entity;

  constructor(private detailsService: DetailsService) { }

  public getEntityTeam(): string {
    return TeamFightEnum[this.entity.team].toString().toLowerCase();
  }

  public onHover(): void {
    this.entity.isHover = true;
  }

  public onLeave(): void {
    this.entity.isHover = false;
  }

  public openDetails(): void {
    this.detailsService.openDialog(this.entity);
  }

  public getEntityImage(entity: Entity): string {
    let src = '../../assets/img/breeds/idle/10_2.png';

    if (entity instanceof BreedEntity) {
      src = '../../assets/img/breeds/idle/' + entity.breed + '' + entity.sex + '_2.png';
    } else if (entity instanceof MonsterEntity) {
      src = '../../assets/img/monsters/' + entity.monsterId + '.png';
    }

    return src;
  }

}

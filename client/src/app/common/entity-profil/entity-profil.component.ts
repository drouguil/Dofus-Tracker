import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';
import { DetailsService } from '../../../app/services/details.service';
import { BreedEntity } from '../../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../../models/fight/entity/MonsterEntity';
import { Stats } from '../../../models/fight/Stats';
import { BoostBuff } from '../../../models/fight/buff/BoostBuff';

@Component({
  selector: 'app-entity-profil',
  templateUrl: './entity-profil.component.html',
  styleUrls: ['./entity-profil.component.scss']
})
export class EntityProfilComponent {

  @Input() entity: Entity;

  constructor(private detailsService: DetailsService) { }

  public openDetails(): void {
    this.detailsService.openDialog(this.entity);
  }

  public getEntityImage(): string {
    let src = '../../assets/img/breeds/heads/10.png';

    if (this.entity instanceof BreedEntity) {
      src = '../../assets/img/breeds/heads/' + this.entity.breed + '' + this.entity.sex + '.png';
    } else if (this.entity instanceof MonsterEntity) {
      src = '../../assets/img/monsters/' + this.entity.monsterId + '.png';
    }

    return src;
  }
}

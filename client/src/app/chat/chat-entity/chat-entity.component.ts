import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';
import { DetailsService } from '../../../app/services/details.service';
import { BreedEntity } from '../../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../../models/fight/entity/MonsterEntity';

@Component({
  selector: 'app-chat-entity',
  templateUrl: './chat-entity.component.html',
  styleUrls: ['./chat-entity.component.scss']
})
export class ChatEntityComponent implements OnInit {

  @Input() entity: Entity;

  public entityImage: string;
  public entityLength: string;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {

    if (this.entity instanceof BreedEntity) {
      this.entityImage = '../../assets/img/breeds/heads/' + this.entity.breed + '' + this.entity.sex + '.png';
    } else if (this.entity instanceof MonsterEntity) {
      this.entityImage = '../../assets/img/monsters/' + this.entity.monsterId + '.png';
    }

    if (this.entity.name.length >= 12) {
      this.entityLength = 'length-' + Math.floor((this.entity.name.length - 10) / 4);
    }
  }

  public openDetails(): void {
    this.detailsService.openDialog(this.entity);
  }

  public onHover(): void {
    this.entity.isHover = true;
  }

  public onLeave(): void {
    this.entity.isHover = false;
  }
}

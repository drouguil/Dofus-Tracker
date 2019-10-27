import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';
import { BreedEntity } from '../../../models/fight/entity/BreedEntity';

@Component({
  selector: 'app-details-spells',
  templateUrl: './details-spells.component.html',
  styleUrls: ['./details-spells.component.scss']
})
export class DetailsSpellsComponent implements OnInit {

  @Input() entity: Entity;

  constructor() { }

  public ngOnInit(): void {
  }

}

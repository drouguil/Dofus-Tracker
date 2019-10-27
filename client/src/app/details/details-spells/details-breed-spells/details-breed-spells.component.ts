import { Component, Input, OnInit } from '@angular/core';
import { BreedEntity } from '../../../../models/fight/entity/BreedEntity';

@Component({
  selector: 'app-details-breed-spells',
  templateUrl: './details-breed-spells.component.html',
  styleUrls: ['./details-breed-spells.component.scss']
})
export class DetailsBreedSpellsComponent implements OnInit {

  @Input() entity: BreedEntity;

  constructor() { }

  public ngOnInit(): void {
  }

}

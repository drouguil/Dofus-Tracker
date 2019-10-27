import { Component, Input, OnInit } from '@angular/core';
import { BreedEntity } from '../../../../models/fight/entity/BreedEntity';

@Component({
  selector: 'app-details-common-spells',
  templateUrl: './details-common-spells.component.html',
  styleUrls: ['./details-common-spells.component.scss']
})
export class DetailsCommonSpellsComponent implements OnInit {

  @Input() entity: BreedEntity;

  constructor() { }

  public ngOnInit(): void {
  }

}

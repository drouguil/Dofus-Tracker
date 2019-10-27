import { Component, Input, OnInit } from '@angular/core';
import { BreedSpell } from '../../../models/fight/BreedSpell';
import { BreedSpellEnum } from '../../../../../enums/BreedSpellEnum';

@Component({
  selector: 'app-breed-spell',
  templateUrl: './breed-spell.component.html',
  styleUrls: ['./breed-spell.component.scss']
})
export class BreedSpellComponent implements OnInit {

  @Input() breedSpell: BreedSpell;

  public spellName: string;
  public breedSpellType: string;

  constructor() { }

  public ngOnInit(): void {
    this.spellName = this.breedSpell.spell.name;
    this.breedSpellType = BreedSpellEnum[this.breedSpell.isChosen].toString().toLowerCase();
  }

}

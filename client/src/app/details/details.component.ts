import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Entity } from '../../models/fight/entity/Entity';
import { BreedEntity } from '../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../models/fight/entity/MonsterEntity';

class SpellCouple {
  constructor(public spell: number, public variante: number) { }
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public spellsCouples: SpellCouple[];
  public entity: Entity;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Entity
  ) {
    this.entity = data;
    this.spellsCouples = new Array();
    this.addSpellCouple(5359, 9375);
    this.addSpellCouple(5361, 9373);
    this.addSpellCouple(5383, 9374);
    this.addSpellCouple(5382, 9376);
    this.addSpellCouple(5370, 9377);
    this.addSpellCouple(5381, 9378);
    this.addSpellCouple(5389, 9379);
    this.addSpellCouple(5371, 9380);
    this.addSpellCouple(5372, 9381);
    this.addSpellCouple(5368, 9382);
    this.addSpellCouple(5386, 9383);
    this.addSpellCouple(5397, 9384);
    this.addSpellCouple(5388, 9385);
    this.addSpellCouple(5367, 9386);
    this.addSpellCouple(5390, 9387);
    this.addSpellCouple(5391, 9388);
    this.addSpellCouple(5400, 9389);
    this.addSpellCouple(5392, 9393);
    this.addSpellCouple(5401, 9390);
    this.addSpellCouple(5402, 9391);
    this.addSpellCouple(5403, 9392);
  }

  private addSpellCouple(spell: number, variante: number): void {
    this.spellsCouples.push(new SpellCouple(spell, variante));
  }

  close(): void {
    this.dialogRef.close();
  }

}

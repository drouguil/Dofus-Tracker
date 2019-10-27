import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../../../models/fight/Spell';

@Component({
  selector: 'app-spell-img',
  templateUrl: './spell-img.component.html',
  styleUrls: ['./spell-img.component.scss']
})
export class SpellImgComponent implements OnInit {

  @Input() spell: Spell | number;
  @Input() width: string;

  public spellImage: string;
  public spellName: string;

  constructor() { }

  ngOnInit(): void {
    let src = '../../assets/img/spells/';
    if (this.spell instanceof Spell) {
      src += this.spell.id + '.png';
      this.spellName = this.spell.name;
    } else {
      src += this.spell + '.png';
      this.spellName = this.spell.toString();
    }
    this.spellImage = src;
  }

  public notFoundSpellImage(): void {
    if (this.spell instanceof Spell) {
      this.spellImage = '../../assets/img/spells/unknow.png';
      this.spellName = this.spell.name;
    }
  }
}

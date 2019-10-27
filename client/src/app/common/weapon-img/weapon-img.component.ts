import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../../models/fight/Weapon';

@Component({
  selector: 'app-weapon-img',
  templateUrl: './weapon-img.component.html',
  styleUrls: ['./weapon-img.component.scss']
})
export class WeaponImgComponent implements OnInit {

  @Input() weapon: Weapon | number;

  public weaponImage: string;
  public weaponName: string;

  constructor() { }

  ngOnInit(): void {
    let src = '../../assets/img/weapons/';
    if (this.weapon instanceof Weapon) {
      src += this.weapon.image + '.png';
      this.weaponName = this.weapon.name;
    } else {
      src += this.weapon + '.png';
      this.weaponName = this.weapon.toString();
    }
    this.weaponImage = src;
  }

  public notFoundweaponImage(): void {
    if (this.weapon instanceof Weapon) {
      this.weaponImage = '../../assets/img/weapons/unknow.png';
      this.weaponName = this.weapon.name;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ChatWeaponMessage } from '../../../../models/chat/ChatWeaponMessage';
import { MapService } from '../../../../app/services/map.service';
import { Weapon } from '../../../../models/fight/Weapon';

@Component({
  selector: 'app-chat-weapon-message',
  templateUrl: './chat-weapon-message.component.html',
  styleUrls: ['./chat-weapon-message.component.scss']
})
export class ChatWeaponMessageComponent implements OnInit {

  @Input() message: ChatWeaponMessage;
  private cellsId: number[] = new Array();
  public weaponLength: string;

  constructor(private mapService: MapService) { }

  public displaySpellCell(): void {
    this.cellsId.push(this.message.cellId);
    this.mapService.spellCells = this.cellsId;
  }

  public clearSpellCells(): void {
    this.cellsId.slice(0, this.cellsId.length);
    this.mapService.clearSpellCells();
  }

  ngOnInit() {
    if (this.message.weapon instanceof Weapon) {
      if (this.message.weapon.name.length >= 10) {
        this.weaponLength = 'length-' + Math.floor((this.message.weapon.name.length - 10) / 4);
      }
    }
  }

}

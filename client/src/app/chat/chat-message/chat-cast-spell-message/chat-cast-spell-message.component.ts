import { Component, OnInit, Input } from '@angular/core';
import { ChatCastSpellMessage } from '../../../../models/chat/ChatCastSpellMessage';
import { Spell } from '../../../../models/fight/Spell';
import { MapService } from '../../../../app/services/map.service';

@Component({
  selector: 'app-chat-cast-spell-message',
  templateUrl: './chat-cast-spell-message.component.html',
  styleUrls: ['./chat-cast-spell-message.component.scss']
})
export class ChatCastSpellMessageComponent implements OnInit {

  @Input() message: ChatCastSpellMessage;
  private cellsId: number[] = new Array();
  public spellLength: string;

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
    if (this.message.spell instanceof Spell) {
      if (this.message.spell.name.length >= 10) {
        this.spellLength = 'length-' + Math.floor((this.message.spell.name.length - 10) / 4);
      }
    }
  }

}

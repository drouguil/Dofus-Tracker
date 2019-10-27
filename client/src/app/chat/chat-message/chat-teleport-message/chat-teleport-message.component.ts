import { Component, Input } from '@angular/core';
import { MapService } from '../../../../app/services/map.service';
import { ChatTeleportMessage } from '../../../../models/chat/ChatTeleportMessage';

@Component({
  selector: 'app-chat-teleport-message',
  templateUrl: './chat-teleport-message.component.html',
  styleUrls: ['./chat-teleport-message.component.scss']
})
export class ChatTeleportMessageComponent {

  @Input() message: ChatTeleportMessage;
  private cellsId: number[] = new Array();

  constructor(private mapService: MapService) { }

  public displaySpellCell(): void {
    this.cellsId.push(this.message.cellId);
    this.mapService.spellCells = this.cellsId;
  }

  public clearSpellCells(): void {
    this.cellsId.slice(0, this.cellsId.length);
    this.mapService.clearSpellCells();
  }

}

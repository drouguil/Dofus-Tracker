import { Component, Input } from '@angular/core';
import { ChatSlideMessage } from '../../../../models/chat/ChatSlideMessage';
import { MapService } from '../../../../app/services/map.service';

@Component({
  selector: 'app-chat-slide-message',
  templateUrl: './chat-slide-message.component.html',
  styleUrls: ['./chat-slide-message.component.scss']
})
export class ChatSlideMessageComponent {

  @Input() message: ChatSlideMessage;
  private cellsId: number[] = new Array();

  constructor(private mapService: MapService) { }

  public displaySpellCell(): void {
    this.cellsId.push(this.message.startCellId);
    this.cellsId.push(this.message.endCellId);
    this.mapService.spellCells = this.cellsId;
  }

  public clearSpellCells(): void {
    this.cellsId.slice(0, this.cellsId.length);
    this.mapService.clearSpellCells();
  }

}

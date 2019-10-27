import { Component, Input } from '@angular/core';
import { MapService } from '../../../../app/services/map.service';
import { ChatMoveMessage } from '../../../../models/chat/ChatMoveMessage';

@Component({
  selector: 'app-chat-move-message',
  templateUrl: './chat-move-message.component.html',
  styleUrls: ['./chat-move-message.component.scss']
})
export class ChatMoveMessageComponent {

  @Input() message: ChatMoveMessage;

  constructor(private mapService: MapService) { }

  public displayMovedCells(): void {
    this.mapService.movedCells = Object.assign([], this.message.cellsId);
  }

  public clearMovedCells(): void {
    this.mapService.clearMovedCells();
  }
}

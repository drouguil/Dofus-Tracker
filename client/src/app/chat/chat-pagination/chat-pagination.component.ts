import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../../app/services/chat.service';

@Component({
  selector: 'app-chat-pagination',
  templateUrl: './chat-pagination.component.html',
  styleUrls: ['./chat-pagination.component.scss']
})
export class ChatPaginationComponent {

  @Input() page: number;
  @Output() pageChanged = new EventEmitter();

  constructor(private chatService: ChatService) { }

  public isDisplayed(): boolean {
    return this.page <= this.chatService.pageMax;
  }

  public isCurrentPage(): boolean {
    return this.page === this.chatService.currentPage;
  }

  public changePage(): void {
    this.pageChanged.emit(this.page);
  }
}

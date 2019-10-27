import { Injectable } from '@angular/core';
import { ChatMessage } from '../../models/chat/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  static instance: ChatService;

  public chat: ChatMessage[][];
  public pageMax: number;
  public currentPage: number;

  private maxMessages: number;
  private maxPages: number;

  constructor() {

    ChatService.instance = this;

    this.maxMessages = 33;
    this.maxPages = 6;

    this.chat = new Array();

    for (let index = 0; index < this.maxPages; index++) {
      this.chat[index] = new Array();
    }
    this.currentPage = 0;
    this.pageMax = 0;
  }

  public addMessage(message: ChatMessage): void {
    this.addMessagePage(message, 0);
  }

  public endFight(): void {
    for (let index = 0; index < this.chat.length; index++) {
      this.chat[index].splice(0, this.chat[index].length);
    }
    this.currentPage = 0;
    this.pageMax = 0;
  }

  private addMessagePage(message: ChatMessage, page: number): void {
    if (page >= 0 && page < this.chat.length) {
      if (this.pageMax < page) {
        this.pageMax = page;
      }
      this.chat[page].push(message);
      if (this.chat[page].length > this.maxMessages) {
        const messageToSwitch = this.chat[page].shift();
        if (messageToSwitch !== undefined) {
          this.addMessagePage(messageToSwitch, page + 1);
        }
      }
    }
  }
}

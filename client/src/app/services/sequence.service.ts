import { Injectable } from '@angular/core';
import { Sequence } from '../../models/sequence/Sequence';
import { Entity } from '../../models/fight/entity/Entity';
import { SequenceTypeEnum } from '../../../../enums/SequenceTypeEnum';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { ChatMessage } from '../../models/chat/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  static instance: SequenceService;

  private sequences: Map<number, Sequence>;

  constructor() {
    SequenceService.instance = this;
    this.sequences = new Map();
  }

  initSequence(author: Entity, sequenceType: SequenceTypeEnum) {
    if (!this.sequences.get(author.id)) {
      this.sequences.set(author.id, new Sequence(author, sequenceType));
    }
  }

  endSequence(author: Entity, sequenceType: SequenceTypeEnum, action: ActionEnum) {
    const sequence = this.sequences.get(author.id);
    if (sequence) {
      sequence.sequenceTypeEnd = sequenceType;
      sequence.action = action;
      sequence.analyze();
      this.sequences.delete(author.id);
    }
  }

  addMessage(author: Entity, chatMessage: ChatMessage) {
    let sequence = this.sequences.get(author.id);
    if (sequence) {
      sequence.chatMessages.push(chatMessage);
    } else if (author.summoner) {
      sequence = this.sequences.get(author.summoner.id);
      if (sequence) {
        sequence.chatMessages.push(chatMessage);
      }
    }
  }

  getSequenceByEntityId(id: number): Sequence | undefined {
    return this.sequences.get(id);
  }
}

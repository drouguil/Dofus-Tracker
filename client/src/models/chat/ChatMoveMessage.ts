import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';

export class ChatMoveMessage extends ChatMessage {

    constructor(
        public cellsId: number[],
        author: Entity
    ) {
        super(author);
    }
}

import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';

export class ChatTeleportMessage extends ChatMessage {

    constructor(
        public cellId: number,
        author: Entity
    ) {
        super(author);
    }
}

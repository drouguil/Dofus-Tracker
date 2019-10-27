import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';

export class ChatSlideMessage extends ChatMessage {

    constructor(
        public target: Entity,
        public startCellId: number,
        public endCellId: number,
        author: Entity
    ) {
        super(author);
        console.log(this);
    }
}

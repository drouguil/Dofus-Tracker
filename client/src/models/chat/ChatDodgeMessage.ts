import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { Sequence } from '../sequence/Sequence';
import { ActionEnum } from '../../../../enums/ActionEnum';

export class ChatDodgeMessage extends ChatMessage {

    constructor(
        public target: Entity,
        public amount: number,
        public action: ActionEnum,
        author: Entity
    ) {
        super(author);
    }

    public load(sequence: Sequence) {
    }
}

import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { ActionEnum } from '../../../../enums/ActionEnum';

export class ChatHealMessage extends ChatMessage {

    constructor(
        public target: Entity,
        public delta: number,
        public action: ActionEnum,
        author: Entity
    ) {
        super(author);
    }
}

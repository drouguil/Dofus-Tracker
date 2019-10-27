import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { ElementEnum } from '../../../../enums/ElementEnum';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { Sequence } from '../sequence/Sequence';

export class ChatHitMessage extends ChatMessage {

    public isDeath = false;

    constructor(
        public target: Entity,
        public loss: number,
        public permanentDamages: number,
        public element: ElementEnum,
        public action: ActionEnum,
        author: Entity,
        public shieldLoss = 0
    ) {
        super(author);
    }

    public load(sequence: Sequence) {
        if (this.target && !this.target.isAlive) {
            this.isDeath = true;
        }
    }
}

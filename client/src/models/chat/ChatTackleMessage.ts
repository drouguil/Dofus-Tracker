import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { Sequence } from '../sequence/Sequence';

export class ChatTackleMessage extends ChatMessage {

    public mpLoss: number | undefined;
    public apLoss: number | undefined;

    constructor(
        public tacklers: Entity[],
        author: Entity,
    ) {
        super(author);
    }

    public load(sequence: Sequence) {
        if (sequence.apLoss !== undefined) {
            this.apLoss = sequence.apLoss;
        }
        if (sequence.mpLoss !== undefined) {
            this.mpLoss = sequence.mpLoss;
        }
    }
}

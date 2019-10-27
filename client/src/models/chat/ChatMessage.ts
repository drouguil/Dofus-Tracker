import { Entity } from '../fight/entity/Entity';
import { Sequence } from '../sequence/Sequence';

export class ChatMessage {

    constructor(
        public author: Entity
    ) { }

    public load(sequence: Sequence): void {
    }
}

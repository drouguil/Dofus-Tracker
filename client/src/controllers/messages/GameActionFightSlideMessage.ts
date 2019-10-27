import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatSlideMessage } from '../../models/chat/ChatSlideMessage';

export class GameActionFightSlideMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public startCellId: number;
    public endCellId: number;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.startCellId = packetMessage.startCellId;
        this.endCellId = packetMessage.endCellId;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);
        const target: Entity | undefined = FightService.instance.getEntityById(this.targetId);

        if (author) {
            if (target) {
                SequenceService.instance.addMessage(author, new ChatSlideMessage(target, this.startCellId, this.endCellId, author));
                target.slide(this.abstractGameAction.actionId, this.startCellId, this.endCellId);
            } else {
                console.error(this.targetId);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
    }
}

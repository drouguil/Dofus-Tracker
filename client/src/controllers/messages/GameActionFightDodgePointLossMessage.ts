import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { ChatDodgeMessage } from '../../models/chat/ChatDodgeMessage';
import { SequenceService } from '../../app/services/sequence.service';

export class GameActionFightDodgePointLossMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public amount: number;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.amount = packetMessage.amount;
    }

    public analyze(): void {

        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const target: Entity | undefined = FightService.instance.getEntityById(this.targetId);
        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);

        if (author) {
            if (target) {
                // tslint:disable-next-line:max-line-length
                SequenceService.instance.addMessage(author, new ChatDodgeMessage(target, this.amount, this.abstractGameAction.actionId, author));
            } else {
                console.error(this.targetId);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
    }
}

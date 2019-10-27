import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';

export class GameActionFightReduceDamagesMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public amount: number;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.amount = packetMessage.delta;
    }

    public analyze(): void {
        console.log(this);
        /*const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const entity: Entity | undefined = FightService.instance.getEntityById(this.targetId);
        if (entity) {
            entity.applyAction(this.abstractGameAction.actionId, this.delta);
        }*/
    }
}

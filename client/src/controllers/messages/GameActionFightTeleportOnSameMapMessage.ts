import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { ChatTeleportMessage } from '../../models/chat/ChatTeleportMessage';
import { SequenceService } from '../../app/services/sequence.service';

export class GameActionFightTeleportOnSameMapMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public cellId: number;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.cellId = packetMessage.cellId;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const entity: Entity | undefined = FightService.instance.getEntityById(this.targetId);
        if (entity) {
            SequenceService.instance.addMessage(entity, new ChatTeleportMessage(this.cellId, entity));
            entity.teleport(this.abstractGameAction.actionId, this.cellId);
        }
    }
}

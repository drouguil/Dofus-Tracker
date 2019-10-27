import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';

export class GameFightTurnEndMessage extends PacketMessage {

    public id: number;

    public parse(packetMessage: any): void {
        this.id = packetMessage.id;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.id);
        if (entity) {
            entity.endTurn();
        }
    }
}

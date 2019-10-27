import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { DirectionEnum } from '../../../../enums/DirectionEnum';
import { MapService } from '../../app/services/map.service';
import { Cell } from '../../models/fight/Cell';
import { ChatMoveMessage } from '../../models/chat/ChatMoveMessage';
import { SequenceService } from '../../app/services/sequence.service';

export class GameMapMovementMessage extends PacketMessage {

    public keyMovements: number[];
    public direction: DirectionEnum;
    public actorId: number;

    public parse(packetMessage: any): void {
        this.keyMovements = packetMessage.keyMovements;
        this.direction = packetMessage.direction;
        this.actorId = packetMessage.actorId;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.actorId);
        if (entity && FightService.instance.isFight) {
            entity.direction = (this.direction + 4) % 8;
            entity.setCell(this.keyMovements[this.keyMovements.length - 1]);
            SequenceService.instance.addMessage(entity, new ChatMoveMessage(this.keyMovements, entity));
        }
    }
}

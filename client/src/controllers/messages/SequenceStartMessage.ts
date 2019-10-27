import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { SequenceTypeEnum } from '../../../../enums/SequenceTypeEnum';
import { SequenceService } from '../../app/services/sequence.service';

export class SequenceStartMessage extends PacketMessage {

    public sequenceType: SequenceTypeEnum;
    public authorId: number;

    public parse(packetMessage: any): void {
        this.sequenceType = packetMessage.sequenceType;
        this.authorId = packetMessage.authorId;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.authorId);
        if (entity) {
            SequenceService.instance.initSequence(entity, this.sequenceType);
        }
    }
}

import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { SequenceTypeEnum } from '../../../../enums/SequenceTypeEnum';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { SequenceService } from '../../app/services/sequence.service';

export class SequenceEndMessage extends PacketMessage {

    public action: ActionEnum;
    public authorId: number;
    public sequenceType: SequenceTypeEnum;

    public parse(packetMessage: any): void {
        this.action = packetMessage.action;
        this.authorId = packetMessage.authorId;
        this.sequenceType = packetMessage.sequenceType;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.authorId);
        if (entity) {
            SequenceService.instance.endSequence(entity, this.sequenceType, this.action);
        }
    }
}

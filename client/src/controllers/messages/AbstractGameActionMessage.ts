import { PacketMessage } from '../PacketMessage';
import { ActionEnum } from '../../../../enums/ActionEnum';

export class AbstractGameActionMessage extends PacketMessage {

    public actionId: ActionEnum;
    public sourceId: number;

    public parse(packetMessage: any): void {
        this.actionId = packetMessage.actionId;
        this.sourceId = packetMessage.sourceId;
    }

    public analyze(): void {
    }
}

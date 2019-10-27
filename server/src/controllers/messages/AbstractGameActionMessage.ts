import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ActionEnum } from "../../../../enums/ActionEnum";

export class AbstractGameActionMessage extends PacketMessage {

    public actionId: ActionEnum;
    public sourceId: number;

    public analyze(packet: Packet): void {
        
        this.actionId = BufferHelper.getSpecialNumber(packet);

        this.sourceId = BufferHelper.getId8(packet);
    }
}
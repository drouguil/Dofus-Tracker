import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { SequenceTypeEnum } from "../../../../enums/SequenceTypeEnum";
import { ActionEnum } from "../../../../enums/ActionEnum";

export class SequenceEndMessage extends PacketMessage {

    public action: ActionEnum;
    public authorId: number;
    public sequenceType: SequenceTypeEnum;

    public analyze(packet: Packet): void {

        this.action = BufferHelper.getSpecialNumber(packet);

        this.authorId = BufferHelper.getId8(packet);

        this.sequenceType = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
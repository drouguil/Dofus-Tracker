import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { SequenceTypeEnum } from "../../../../enums/SequenceTypeEnum";

export class SequenceStartMessage extends PacketMessage {

    public sequenceType: SequenceTypeEnum;
    public authorId: number;

    public analyze(packet: Packet): void {

        this.sequenceType = BufferHelper.getSpecialNumber(packet);

        this.authorId = BufferHelper.getId8(packet);

        console.log(this);
    }
}
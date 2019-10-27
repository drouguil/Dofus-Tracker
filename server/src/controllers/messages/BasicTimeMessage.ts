import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class BasicTimeMessage extends PacketMessage {

    public timestamp: number;
    public timestampOffset: number;

    public analyze(packet: Packet): void {

        this.timestamp = BufferHelper.getId8(packet);

        this.timestampOffset = BufferHelper.getNumber(packet, 2);

        console.log(this);
    }
}
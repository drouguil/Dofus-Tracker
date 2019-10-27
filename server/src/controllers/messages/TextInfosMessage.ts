import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class TextInfosMessage extends PacketMessage {

    public msgType: number;
    public msgId: number;
    public parameters: string[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
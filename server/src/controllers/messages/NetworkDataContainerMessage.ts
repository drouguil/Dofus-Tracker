import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class NetworkDataContainerMessage extends PacketMessage {

    public content: number[];

    public analyze(packet: Packet): void {
        
        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
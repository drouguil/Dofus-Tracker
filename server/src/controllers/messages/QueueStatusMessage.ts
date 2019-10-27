import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class QueueStatusMessage extends PacketMessage {

    public position: number;
    public total: number;

    public analyze(packet: Packet): void {
        
        this.position = BufferHelper.getNumber(packet, 2);
        
        this.total = BufferHelper.getNumber(packet, 2);

        console.log(this);
    }
}
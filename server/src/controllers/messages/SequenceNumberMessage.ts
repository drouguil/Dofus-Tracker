import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class SequenceNumberMessage extends PacketMessage {

    public number: number;

    public analyze(packet: Packet): void {

        this.number = BufferHelper.getNumber(packet, 2);
        
        console.log(this);
    }
}
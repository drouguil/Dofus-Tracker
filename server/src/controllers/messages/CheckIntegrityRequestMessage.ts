import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class CheckIntegrityRequestMessage extends PacketMessage {

    public data: number[];

    public analyze(packet: Packet): void {

        this.data = BufferHelper.getNumbers(packet, 0);
        
        //console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class TrustStatusMessage extends PacketMessage {

    public trusted: boolean;

    public analyze(packet: Packet): void {
        
        this.trusted = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
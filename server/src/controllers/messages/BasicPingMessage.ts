
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class BasicPingMessage extends PacketMessage {

    public quiet: boolean;

    public analyze(packet: Packet): void {

        this.quiet = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
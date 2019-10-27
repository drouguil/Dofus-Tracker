
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameContextCreateMessage extends PacketMessage {

    public context: number;

    public analyze(packet: Packet): void {

        this.context = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
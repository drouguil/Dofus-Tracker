import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class ServerOptionalFeaturesMessage extends PacketMessage {

    public features: number[];

    public analyze(packet: Packet): void {

        this.features = BufferHelper.getNumbers(packet);

        console.log(this);
    }
}
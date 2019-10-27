import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightReadyMessage extends PacketMessage {

    public isReady: boolean;

    public analyze(packet: Packet): void {

        this.isReady = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
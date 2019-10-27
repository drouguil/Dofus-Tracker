import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightTurnReadyMessage extends PacketMessage {

    public isReady: boolean;

    public analyze(packet: Packet): void {

        this.isReady = BufferHelper.getNumber(packet,1) != 0;

        console.log(this);
    }
}
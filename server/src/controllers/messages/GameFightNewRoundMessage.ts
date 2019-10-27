import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightNewRoundMessage extends PacketMessage {

    public roundNumber: number;

    public analyze(packet: Packet): void {

        this.roundNumber = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
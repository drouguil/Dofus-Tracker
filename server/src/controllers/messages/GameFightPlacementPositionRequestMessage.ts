import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightPlacementPositionRequestMessage extends PacketMessage {

    public cellId: number;

    public analyze(packet: Packet): void {

        this.cellId = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
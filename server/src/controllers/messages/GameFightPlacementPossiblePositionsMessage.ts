import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightPlacementPossiblePositionsMessage extends PacketMessage {

    public positionsForChallengers: number[];
    public positionsForDefenders: number[];
    public teamNumber: number;

    public analyze(packet: Packet): void {

        this.positionsForChallengers = BufferHelper.getNumbers(packet, 2, true);

        this.positionsForDefenders = BufferHelper.getNumbers(packet, 2, true);

        this.teamNumber = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightJoinRequestMessage extends PacketMessage {

    public fighterId: number;
    public fightId: number;

    public analyze(packet: Packet): void {

        BufferHelper.debug(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PlayerStatusProtocol } from "../protocols/PlayerStatusProtocol";

export class PlayerStatusUpdateMessage extends PacketMessage {

    public accountId: number;
    public playerId: number;
    public status: PlayerStatusProtocol;

    public analyze(packet: Packet): void {

        BufferHelper.debug(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameFightShowFighterMessage extends PacketMessage {

    public protocol: PacketProtocol;

    public analyze(packet: Packet): void {

        let protocolId: number = BufferHelper.getNumber(packet, 2);

        this.protocol = protocolManager.analyze(protocolId, packet);

        console.log(this);
    }
}
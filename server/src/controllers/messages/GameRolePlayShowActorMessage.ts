import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { protocolManager } from "../../helpers/ProtocolManager";
import { PacketProtocol } from "../PacketProtocol";

export class GameRolePlayShowActorMessage extends PacketMessage {

    public infos: PacketProtocol;

    public analyze(packet: Packet): void {

        let protocolId: number = BufferHelper.getNumber(packet, 2);

        this.infos = protocolManager.analyze(protocolId, packet);

        console.log(this);
    }
}
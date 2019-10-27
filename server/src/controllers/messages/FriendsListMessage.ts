import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { protocolManager } from '../../helpers/ProtocolManager';
import { PacketProtocol } from "../PacketProtocol";

export class FriendsListMessage extends PacketMessage {

    public friendsInfosProtocols: PacketProtocol[];

    public analyze(packet: Packet): void {

        /*this.friendsInfosProtocols = new Array();

        let friendsLength: number = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < friendsLength; index++) {
            let protocolId: number = BufferHelper.getNumber(packet, 2);
            let packetProtocol: PacketProtocol = protocolManager.analyze(protocolId, packet);
            this.friendsInfosProtocols.push(packetProtocol);
        }*/

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
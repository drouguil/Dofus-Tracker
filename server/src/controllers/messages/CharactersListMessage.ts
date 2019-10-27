import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from '../../helpers/ProtocolManager';

export class CharactersListMessage extends PacketMessage {

    public characters: PacketProtocol[];

    public unknow: number;

    public analyze(packet: Packet): void {
        
        this.characters = new Array();

        let charactersLength: number = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < charactersLength; index++) {
            let protocolId: number = BufferHelper.getNumber(packet, 2);
            let packetProtocol: PacketProtocol = protocolManager.analyze(protocolId, packet);
            this.characters.push(packetProtocol);
        }

        this.unknow = BufferHelper.getSpecialNumber(packet);
        
        console.log(this);
    }
}
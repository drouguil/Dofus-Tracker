import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { CharacterBaseInfosProtocol } from "../protocols/CharacterBaseInfosProtocol";

export class CharacterSelectionSuccessMessage extends PacketMessage {

    public infos: CharacterBaseInfosProtocol;
    public isCollectingStats: boolean;

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
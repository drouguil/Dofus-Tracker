import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PaddockContentInfosProtocol } from "../protocols/PaddockContentInfosProtocol";

export class GuildInfosPaddocksMessage extends PacketMessage {

    public nbPaddockMax: number;
    public paddocksInfos: PaddockContentInfosProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
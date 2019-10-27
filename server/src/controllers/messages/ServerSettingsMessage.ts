import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class ServerSettingsMessage extends PacketMessage {

    public lang: string;
    public community: number;
    public gameType: number;

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
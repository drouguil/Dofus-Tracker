import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class BasicLatencyStatsMessage extends PacketMessage {

    public latency: number;
    public sampleCount: number;
    public max: number;

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);
        console.log(this);
    }
}
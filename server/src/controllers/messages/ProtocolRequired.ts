import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class ProtocolRequired extends PacketMessage {

    public requiredVersion: number;
    public currentVersion: number;

    public analyze(packet: Packet): void {

        this.requiredVersion = BufferHelper.getNumber(packet,4);
        
        this.currentVersion = BufferHelper.getNumber(packet,4);

        console.log(this);
    }
}
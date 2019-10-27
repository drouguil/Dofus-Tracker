import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { ServerSessionConstant } from "../../models/game/ServerSessionConstant";
import { BufferHelper } from "../../helpers/BufferHelper";

export class ServerSessionConstantsMessage extends PacketMessage {

    public serverSessionConstants: ServerSessionConstant[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);
        
        console.log(this);
    }
}
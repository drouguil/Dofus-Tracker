import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightTurnStartMessage extends PacketMessage {

    public id: number;
    public waitTime: number;

    public analyze(packet: Packet): void {
        
        this.id = BufferHelper.getId8(packet);

        this.waitTime = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}

import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class LifePointsRegenBeginMessage extends PacketMessage {

    public regenRate: number;

    public analyze(packet: Packet): void {

        this.regenRate = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
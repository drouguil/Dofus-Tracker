
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class LifePointsRegenEndMessage extends PacketMessage {

    public life: number;
    public maxLife: number;
    public lifePointsGained: number;

    public analyze(packet: Packet): void {

        this.life = BufferHelper.getSpecialNumber(packet);
        
        this.maxLife = BufferHelper.getSpecialNumber(packet);

        this.lifePointsGained = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class InventoryWeightMessage extends PacketMessage {

    public weight: number;
    public weightMax: number;

    public analyze(packet: Packet): void {

        this.weight = BufferHelper.getSpecialNumber(packet);

        this.weightMax = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameActionAcknowledgementMessage extends PacketMessage {

    public isValid: boolean;
    public actionId: number;

    public analyze(packet: Packet): void {

        this.isValid = BufferHelper.getBoolean(packet);

        this.actionId = BufferHelper.getSpecialNumber(packet);
        
        console.log(this);
    }
}
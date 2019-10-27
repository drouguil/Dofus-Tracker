
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class CharacterLevelUpMessage extends PacketMessage {

    public level: number;

    public analyze(packet: Packet): void {

        this.level = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameContextRemoveElementMessage extends PacketMessage {

    public id: number;

    public analyze(packet: Packet): void {

        this.id = BufferHelper.getId8(packet);

        console.log(this);
    }
}
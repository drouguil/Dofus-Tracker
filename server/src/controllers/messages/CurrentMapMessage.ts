import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class CurrentMapMessage extends PacketMessage {

    public mapId: number;
    public mapKey: string;

    public analyze(packet: Packet): void {

        this.mapId = BufferHelper.getId8(packet);

        this.mapKey = BufferHelper.getText(packet, 2);
        
        console.log(this);
    }
}
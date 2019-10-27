import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class MapInformationsRequestMessage extends PacketMessage {

    public mapId: number;

    public analyze(packet: Packet): void {

        this.mapId = BufferHelper.getId8(packet);

        console.log(this);
    }
}
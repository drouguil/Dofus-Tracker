import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class UpdateMapPlayersAggressableStatusMessage extends PacketMessage {

    public playerIds: number[];
    public enable: number[];

    public analyze(packet: Packet): void {

        this.playerIds = BufferHelper.getNumbers(packet, 2, true);
        
        this.enable = BufferHelper.getNumbers(packet, 2, true);

        console.log(this);
    }
}
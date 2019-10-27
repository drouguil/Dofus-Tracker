import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightHumanReadyStateMessage extends PacketMessage {

    public characterId: number;
    public isReady: boolean;

    public analyze(packet: Packet): void {

        this.characterId = BufferHelper.getSpecialNumber(packet);

        this.isReady = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
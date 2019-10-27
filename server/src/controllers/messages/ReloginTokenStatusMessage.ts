import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class ReloginTokenStatusMessage extends PacketMessage {

    public isValidToken: boolean;
    public token: string;

    public analyze(packet: Packet): void {

        this.isValidToken = BufferHelper.getBoolean(packet);

        this.token = BufferHelper.getText(packet, 1);

        console.log(this);
    }
}
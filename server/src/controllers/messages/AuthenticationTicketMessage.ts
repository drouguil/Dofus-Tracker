import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class AuthenticationTicketMessage extends PacketMessage {

    public lang: string;
    public ticket: string;

    public analyze(packet: Packet): void {
        
        this.lang = BufferHelper.getText(packet);

        this.ticket = BufferHelper.getText(packet);

        console.log(this);
    }
}
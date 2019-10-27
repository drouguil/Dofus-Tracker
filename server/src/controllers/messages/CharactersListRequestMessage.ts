import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";

export class CharactersListRequestMessage extends PacketMessage {

    public analyze(packet: Packet): void {
        
        console.log(this);
    }
}
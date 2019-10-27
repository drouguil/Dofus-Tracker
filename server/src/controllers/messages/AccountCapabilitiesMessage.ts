import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class AccountCapabilitiesMessage extends PacketMessage {

    public accountId: number;
    public tutorialAvailable: boolean;
    public breedsVisible: number;
    public breedsAvailable: number;
    public status: number;

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
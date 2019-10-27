import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { SpellItemProtocol } from "../protocols/SpellItemProtocol";

export class SpellListMessage extends PacketMessage {

    public spellPrevisualization: boolean;
    public spells: SpellItemProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
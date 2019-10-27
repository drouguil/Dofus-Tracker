import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { CharacterCharacteristicsInfosProtocol } from "../protocols/CharacterCharacteristicsInfosProtocol";

export class FighterStatsListMessage extends PacketMessage {

    public stats: CharacterCharacteristicsInfosProtocol;

    public analyze(packet: Packet): void {
        
        this.stats = new CharacterCharacteristicsInfosProtocol();
        
        this.stats.analyze(packet);
        
        console.log(this);
    }
}
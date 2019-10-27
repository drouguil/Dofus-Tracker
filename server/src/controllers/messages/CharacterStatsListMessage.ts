
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { CharacterCharacteristicsInfosProtocol } from '../protocols/CharacterCharacteristicsInfosProtocol';

export class CharacterStatsListMessage extends PacketMessage {

    public stats: CharacterCharacteristicsInfosProtocol;

    public analyze(packet: Packet): void {

        BufferHelper.debug(packet);

        /*this.stats = new CharacterCharacteristicsInfosProtocol();
        
        this.stats.analyze(packet);

        console.log(this);*/
    }
}
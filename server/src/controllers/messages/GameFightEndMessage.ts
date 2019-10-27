import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { FightResultListEntryProtocol } from "../protocols/FightResultListEntryProtocol";
import { NamedPartyTeamWithOutcomeProtocol } from "../protocols/NamedPartyTeamWithOutcomeProtocol";

export class GameFightEndMessage extends PacketMessage {

    public duration: number;
    public ageBonus: number;
    public lootShareLimitMalus: number;
    public results: FightResultListEntryProtocol[];
    public namedPartyTeamsOutcomes: NamedPartyTeamWithOutcomeProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
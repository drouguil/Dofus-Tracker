import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { FightTeamInfosProtocol } from "../protocols/FightTeamInfosProtocol";

export class GameFightUpdateTeamMessage extends PacketMessage {

    public fightId: number;
    public team: FightTeamInfosProtocol;

    public analyze(packet: Packet): void {

        this.fightId = BufferHelper.getSpecialNumber(packet);

        this.team = new FightTeamInfosProtocol();

        this.team.analyze(packet);

        console.log(this);
    }
}
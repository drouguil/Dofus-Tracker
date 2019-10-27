import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTeamInfosProtocol } from "../../controllers/protocols/FightTeamInfosProtocol";
import { FightOptionsInfosProtocol } from "../../controllers/protocols/FightOptionsInfosProtocol";
import { FightTypeEnum } from "../../../../enums/FightTypeEnum";

export class FightCommonInfosProtocol extends PacketProtocol {

    constructor() {
        super(43);
    }

    public fightId: number;
    public fightType: FightTypeEnum;
    public fightTeams: FightTeamInfosProtocol[];
    public fightTeamsPositions: number[];
    public fightTeamsOptions: FightOptionsInfosProtocol[];

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.fightId = object.fightId;
        this.fightType = object.fightType;
        this.fightTeams = object.fightTeams;
        this.fightTeamsPositions = object.fightTeamsPositions;
        this.fightTeamsOptions = object.fightTeamsOptions;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTeamMemberInfosProtocol } from "./FightTeamMemberInfosProtocol";
import { MonsterInGroupLightInfosProtocol } from "./MonsterInGroupLightInfosProtocol";

export class FightTeamMemberMonsterInfosProtocol extends PacketProtocol {

    constructor() {
        super(6);
    }

    public member: FightTeamMemberInfosProtocol;
    public monster: MonsterInGroupLightInfosProtocol;

    public analyze(packet: Packet): void {
        this.member = new FightTeamMemberInfosProtocol();

        this.member.analyze(packet);

        this.monster = new MonsterInGroupLightInfosProtocol();

        this.monster.analyze(packet);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.member = object.member;
        this.monster = object.monster;
    }
}
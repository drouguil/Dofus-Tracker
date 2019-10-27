import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTeamMemberInfosProtocol } from "./FightTeamMemberInfosProtocol";

export class FightTeamMemberCharacterInfosProtocol extends PacketProtocol {

    constructor() {
        super(13);
    }

    public member: FightTeamMemberInfosProtocol;
    public name: string;
    public level: number;

    public analyze(packet: Packet): void {
        this.member = new FightTeamMemberInfosProtocol();

        this.member.analyze(packet);

        this.name = BufferHelper.getText(packet);

        this.level = BufferHelper.getSpecialNumber(packet);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.member = object.member;
        this.name = object.name;
        this.level = object.level;
    }
}
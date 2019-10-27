import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { TeamTypeEnum } from "../../../../enums/TeamTypeEnum";
import { protocolManager } from "../../helpers/ProtocolManager";

export class FightTeamInfosProtocol extends PacketProtocol {

    constructor() {
        super(33);
    }

    public teamId: number;
    public leaderId: number;
    public teamSide: number;
    public teamTypeId: TeamTypeEnum;
    public nbWaves: number;
    public teamMembers: PacketProtocol[];

    public analyze(packet: Packet): void {

        this.teamId = BufferHelper.getSpecialNumber(packet);

        this.leaderId = BufferHelper.getId8(packet);

        this.teamSide = BufferHelper.getNumber(packet, 1, true);

        this.teamTypeId = BufferHelper.getSpecialNumber(packet);

        this.nbWaves = BufferHelper.getSpecialNumber(packet);

        let teamMembersLength: number = BufferHelper.getNumber(packet, 2);

        this.teamMembers = new Array();

        for (let index = 0; index < teamMembersLength; index++) {
            let protocolId: number = BufferHelper.getNumber(packet, 2);
            this.teamMembers.push(protocolManager.analyze(protocolId, packet));
        }
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.teamId = object.teamId;
        this.leaderId = object.leaderId;
        this.teamSide = object.teamSide;
        this.teamTypeId = object.teamTypeId;
        this.nbWaves = object.nbWaves;
        this.teamMembers = object.teamMembers;
    }
}
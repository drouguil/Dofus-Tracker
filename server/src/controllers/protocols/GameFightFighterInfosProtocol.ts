import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";
import { TeamFightEnum } from "../../../../enums/TeamFightEnum";

export class GameFightFighterInfosProtocol extends PacketProtocol {
    
    constructor() {
        super(143);
    }

    public team: TeamFightEnum;
    public wave: number;
    public alive: boolean;
    public stats: PacketProtocol;
    public previousPositions: number[];

    public analyze(packet: Packet): void {
        this.team = BufferHelper.getSpecialNumber(packet);

        this.wave = BufferHelper.getSpecialNumber(packet);

        this.alive = BufferHelper.getBoolean(packet);

        let protocolId: number = BufferHelper.getNumber(packet, 2);

        this.stats = protocolManager.analyze(protocolId, packet);

        this.previousPositions = new Array();

        let previousPositionsLength: number = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < previousPositionsLength; index++) {
            let position: number = BufferHelper.getNumber(packet, 2);
            this.previousPositions.push(position);
        }
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.team = object.team;
        this.wave = object.wave;
        this.alive = object.alive;
        this.stats = object.stats;
        this.previousPositions = object.previousPositions;
    }
}
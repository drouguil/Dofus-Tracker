import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { GameContextActorInfosProtocol } from "./GameContextActorInfosProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameRolePlayGroupMonsterInfosProtocol extends PacketProtocol {

    constructor() {
        super(160);
    }

    public context: GameContextActorInfosProtocol;
    public keyRingBonus: boolean;
    public hasHardcoreDrop: boolean;
    public hasAVARewardToken: boolean;
    public staticInfos: PacketProtocol;
    public creationDate: number;
    public ageBonusRate: number;
    public lootShare: number;
    public alignmentSide: number;

    public analyze(packet: Packet): void {

        this.context = new GameContextActorInfosProtocol();

        this.context.analyze(packet);

        let flag1: number[] = BufferHelper.getBits(packet);

        this.keyRingBonus = flag1[0] != 0;

        this.hasHardcoreDrop = flag1[1] != 0;

        this.hasAVARewardToken = flag1[2] != 0;

        let protocolId: number = BufferHelper.getNumber(packet, 2);

        this.staticInfos = protocolManager.analyze(protocolId, packet);

        this.creationDate = BufferHelper.getNumber(packet, 8);

        this.ageBonusRate = BufferHelper.getNumber(packet, 4);

        this.lootShare = BufferHelper.getNumber(packet, 1, true);

        this.alignmentSide = BufferHelper.getNumber(packet, 1, true);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.context = object.context;
        this.keyRingBonus = object.keyRingBonus;
        this.hasHardcoreDrop = object.hasHardcoreDrop;
        this.staticInfos = object.staticInfos;
        this.creationDate = object.creationDate;
        this.ageBonusRate = object.ageBonusRate;
        this.lootShare = object.lootShare;
        this.alignmentSide = object.alignmentSide;
    }
}
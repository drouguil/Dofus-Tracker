import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PlayerStateEnum } from "../../../../enums/PlayerStateEnum";
import { PacketProtocol } from "../PacketProtocol";
import { FriendInfosProtocol } from "./FriendInfosProtocol";
import { PlayerStatusEnum } from "../../../../enums/PlayerStatusEnum";
import { BasicGuildInfos } from "../../models/game/BasicGuildInfos";

export class FriendOnlineInfosProtocol extends FriendInfosProtocol {

    constructor() {
        super();
        this.protocolId = 92;
    }

    public lastConnection: number;
    public name: string;
    public state: PlayerStateEnum;
    public unknow: number;
    public playerId: number;
    public playerName: string;
    public level: number;
    public alignmentSide: number;
    public breed: number;
    public sex: boolean;
    public guildInfo: BasicGuildInfos;
    public moodSmileyId: number;
    public status: PlayerStatusEnum;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.lastConnection = object.lastConnection;
        this.name = object.name;
        this.state = object.state;
        this.unknow = object.unknow;
        this.playerId = object.playerId;
        this.playerName = object.playerName;
        this.level = object.level;
        this.alignmentSide = object.alignmentSide;
        this.breed = object.breed;
        this.sex = object.sex;
        this.guildInfo = object.guildInfo;
        this.moodSmileyId = object.moodSmileyId;
        this.status = object.status;
    }
}
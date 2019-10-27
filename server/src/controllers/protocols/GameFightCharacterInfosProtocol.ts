import { Packet } from "../../models/packets/Packet";
import { PacketProtocol } from "../PacketProtocol";
import { ActorAlignmentInfosProtocol } from "./ActorAlignmentInfosProtocol";
import { BreedEnum } from "../../../../enums/BreedEnum";
import { GameFightFighterNamedInfosProtocol } from "./GameFightFighterNamedInfosProtocol";
import { GameContextActorInfosProtocol } from "./GameContextActorInfosProtocol";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightCharacterInfosProtocol extends PacketProtocol {

    constructor() {
        super(46);
    }

    public gameContextActorInfos: GameContextActorInfosProtocol;
    public fighter: GameFightFighterNamedInfosProtocol;
    public level: number;
    public alignmentInfos: ActorAlignmentInfosProtocol;
    public breed: BreedEnum;
    public sex: boolean;

    public analyze(packet: Packet): void {

        this.gameContextActorInfos = new GameContextActorInfosProtocol();

        this.gameContextActorInfos.analyze(packet);

        this.fighter = new GameFightFighterNamedInfosProtocol();

        this.fighter.analyze(packet);

        this.level = BufferHelper.getSpecialNumber(packet);

        this.alignmentInfos = new ActorAlignmentInfosProtocol();

        this.alignmentInfos.analyze(packet);

        this.breed = BufferHelper.getSpecialNumber(packet);

        this.sex = BufferHelper.getBoolean(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.gameContextActorInfos = object.gameContextActorInfos
        this.fighter = object.fighter;
        this.level = object.level;
        this.alignmentInfos = object.alignmentInfos;
        this.breed = object.breed;
        this.sex = object.sex;
    }
}
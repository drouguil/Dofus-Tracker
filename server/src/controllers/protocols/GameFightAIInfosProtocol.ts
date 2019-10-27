import { Packet } from "../../models/packets/Packet";
import { PacketProtocol } from "../PacketProtocol";
import { GameFightFighterInfosProtocol } from "./GameFightFighterInfosProtocol";
import { GameContextActorInfosProtocol } from "./GameContextActorInfosProtocol";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightAIInfosProtocol extends PacketProtocol {

    constructor() {
        super(151);
    }

    public gameContextActorInfos: GameContextActorInfosProtocol;
    public fighter: GameFightFighterInfosProtocol;

    public analyze(packet: Packet): void {

        this.gameContextActorInfos = new GameContextActorInfosProtocol();

        this.gameContextActorInfos.analyze(packet);

        this.fighter = new GameFightFighterInfosProtocol();

        this.fighter.analyze(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.gameContextActorInfos = object.gameContextActorInfos;
        this.fighter = object.fighter;
    }
}
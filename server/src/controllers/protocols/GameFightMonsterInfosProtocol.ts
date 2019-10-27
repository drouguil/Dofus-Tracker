import { Packet } from "../../models/packets/Packet";
import { PacketProtocol } from "../PacketProtocol";
import { GameFightAIInfosProtocol } from "./GameFightAIInfosProtocol";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightMonsterInfosProtocol extends PacketProtocol {

    constructor() {
        super(29);
    }

    public creature: GameFightAIInfosProtocol;
    public creatureId: number;
    public creatureGrade: number;
    public level: number;

    public analyze(packet: Packet): void {

        this.creature = new GameFightAIInfosProtocol();

        this.creature.analyze(packet);

        this.creatureId = BufferHelper.getSpecialNumber(packet);

        this.creatureGrade = BufferHelper.getSpecialNumber(packet);

        this.level = BufferHelper.getNumber(packet, 2);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.creature = object.creature;
        this.creatureId = object.creatureId;
        this.creatureGrade = object.creatureGrade;
        this.level= object.level;
    }
}
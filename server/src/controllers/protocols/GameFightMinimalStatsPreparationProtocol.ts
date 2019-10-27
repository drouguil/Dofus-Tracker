import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { GameFightMinimalStatsProtocol } from "./GameFightMinimalStatsProtocol";

export class GameFightMinimalStatsPreparationProtocol extends PacketProtocol {

    constructor() {
        super(360);
    }

    public stats: GameFightMinimalStatsProtocol;
    public initiative: number;

    public analyze(packet: Packet): void {
        
        this.stats = new GameFightMinimalStatsProtocol();

        this.stats.analyze(packet);

        this.initiative = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.stats = object.stats;
        this.initiative = object.initiative;
    }
}
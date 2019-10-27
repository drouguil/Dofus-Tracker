import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightLootProtocol } from "./FightLootProtocol";

export class FightResultListEntryProtocol extends PacketProtocol {

    constructor() {
        super(16);
    }

    public outcome: number;
    public wave: number;
    public rewards: FightLootProtocol;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.outcome = object.outcome;
        this.wave = object.wave;
        this.rewards = object.rewards;
    }
}
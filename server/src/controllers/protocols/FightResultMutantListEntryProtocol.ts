import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightResultFighterListEntryProtocol } from "./FightResultFighterListEntryProtocol";

export class FightResultMutantListEntryProtocol extends PacketProtocol {

    constructor() {
        super(216);
    }

    public list: FightResultFighterListEntryProtocol;
    public level: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.list = object.list;
        this.level = object.level;
    }
}
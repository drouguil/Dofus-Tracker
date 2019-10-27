import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightResultListEntryProtocol } from "./FightResultListEntryProtocol";

export class FightResultFighterListEntryProtocol extends PacketProtocol {

    constructor() {
        super(189);
    }

    public list: FightResultListEntryProtocol;
    public id: number;
    public alive: boolean;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.list = object.list;
        this.id = object.id;
        this.alive = object.alive;
    }
}
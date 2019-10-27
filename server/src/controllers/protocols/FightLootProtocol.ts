import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class FightLootProtocol extends PacketProtocol {

    constructor() {
        super(41);
    }

    public objects: number[];
    public kamas: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.objects = object.objects;
        this.kamas = object.kamas;
    }
}
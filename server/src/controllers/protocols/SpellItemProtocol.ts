import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class SpellItemProtocol extends PacketProtocol {

    constructor() {
        super(49);
    }

    public position: number;
    public spellId: number;
    public spellLevel: number;

    public analyze(packet: Packet): void {
        
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.position = object.position;
        this.spellId = object.spellId;
        this.spellLevel = object.spellLevel;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { EntityDispositionInfosProtocol } from "./EntityDispositionInfosProtocol";

export class FightEntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(217);
    }

    public entityDispositionInfosProtocol: EntityDispositionInfosProtocol;
    public carryingCharacterId: number;

    public analyze(packet: Packet): void {
        
        this.entityDispositionInfosProtocol = new EntityDispositionInfosProtocol();

        this.entityDispositionInfosProtocol.analyze(packet);

        this.carryingCharacterId = BufferHelper.getId8(packet);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.entityDispositionInfosProtocol = object.entityDispositionInfosProtocol;
        this.carryingCharacterId = object.carryingCharacterId;
    }
}
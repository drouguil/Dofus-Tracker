import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { DirectionEnum } from "../../../../enums/DirectionEnum";
import { PacketProtocol } from "../PacketProtocol";

export class EntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(60);
    }

    public cellId: number;
    public direction: DirectionEnum;

    public analyze(packet: Packet): void {

        this.cellId = BufferHelper.getNumber(packet, 2, true);

        this.direction = BufferHelper.getNumber(packet, 1, true);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.cellId = object.cellId;
        this.direction = object.direction;
    }
}
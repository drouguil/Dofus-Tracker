import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { DirectionEnum } from "../../../../enums/DirectionEnum";

export class IdentifiedEntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(107);
    }

    public cellId: number;
    public direction: DirectionEnum;
    public id: number;

    public analyze(packet: Packet): void {

        this.cellId = BufferHelper.getNumber(packet, 2, true);
        
        this.direction = BufferHelper.getSpecialNumber(packet);
        
        this.id = BufferHelper.getId8(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.id = object.id;
        this.cellId = object.cellId;
        this.direction = object.direction;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class StatedElementProtocol extends PacketProtocol {

    constructor() {
        super(108);
    }

    public elementId: number;
    public elementCellId: number;
    public elementState: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.elementId = object.elementId;
        this.elementCellId = object.elementCellId;
        this.elementState = object.elementState;
    }
}
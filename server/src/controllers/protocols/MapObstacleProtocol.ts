import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class MapObstacleProtocol extends PacketProtocol {

    constructor() {
        super(200);
    }

    public obstacleCellId: number;
    public state: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.obstacleCellId = object.obstacleCellId;
        this.state = object.state;
    }
}
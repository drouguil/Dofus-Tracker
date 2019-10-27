import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class MountInfosForPaddockProtocol extends PacketProtocol {

    constructor() {
        super(184);
    }

    public modelId: number;
    public name: string;
    public ownerName: string;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.modelId = object.modelId;
        this.name = object.name;
        this.ownerName = object.ownerName;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { MountInfosForPaddockProtocol } from "./MountInfosForPaddockProtocol";

export class PaddockContentInfosProtocol extends PacketProtocol {

    constructor() {
        super(183);
    }

    public paddockId: number;
    public worldX: number;
    public worldY: number;
    public mapId: number;
    public subAreaId: number;
    public abandonned: boolean;
    public mountsInformations: MountInfosForPaddockProtocol[];

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.paddockId = object.paddockId;
        this.worldX = object.worldX;
        this.worldY = object.worldY;
        this.mapId = object.mapId;
        this.subAreaId = object.subAreaId;
        this.abandonned = object.abandonned;
        this.mountsInformations = object.mountsInformations;
    }
}
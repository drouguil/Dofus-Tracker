import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class HouseInfosProtocol extends PacketProtocol {

    constructor() {
        super(111);
    }

    public houseId: number;
    public doorsOnMap: number[];
    public ownerName: string;
    public isOnSale: boolean;
    public isSaleLocked: boolean;
    public modelId: number;

    public analyze(packet: Packet): void {
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.houseId = object.houseId;
        this.doorsOnMap = object.doorsOnMap;
        this.ownerName = object.ownerName;
        this.isOnSale = object.isOnSale;
        this.isSaleLocked = object.isSaleLocked;
        this.modelId = object.modelId;
    }
}
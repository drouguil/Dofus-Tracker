import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { EntityLookProtocol } from "../../controllers/protocols/EntityLookProtocol";

export class SubEntityProtocol extends PacketProtocol {

    constructor() {
        super(54);
    }

    public bindingPointCategory: number;
    public bindingPointIndex: number;
    public subEntityLook: EntityLookProtocol;

    public analyze(packet: Packet): void {
        this.bindingPointCategory = BufferHelper.getSpecialNumber(packet);
        
        this.bindingPointIndex = BufferHelper.getSpecialNumber(packet);

        this.subEntityLook = new EntityLookProtocol();

        this.subEntityLook.analyze(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.bindingPointCategory = object.bindingPointCategory;
        this.bindingPointIndex = object.bindingPointIndex;
        this.subEntityLook = object.subEntityLook;
    }
}
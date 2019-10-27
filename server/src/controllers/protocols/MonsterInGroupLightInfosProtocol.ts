import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class MonsterInGroupLightInfosProtocol extends PacketProtocol {

    constructor() {
        super(395);
    }

    public creatureId: number;
    public grade: number;

    public analyze(packet: Packet): void {

        this.creatureId = BufferHelper.getNumber(packet, 4);

        this.grade = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.creatureId = object.creatureId;
        this.grade = object.grade;
    }
}
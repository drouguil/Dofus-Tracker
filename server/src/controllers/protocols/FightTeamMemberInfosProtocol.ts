import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class FightTeamMemberInfosProtocol extends PacketProtocol {

    constructor() {
        super(44);
    }

    public id: number;

    public analyze(packet: Packet): void {
        this.id = BufferHelper.getId8(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.id = object.id;
    }
}
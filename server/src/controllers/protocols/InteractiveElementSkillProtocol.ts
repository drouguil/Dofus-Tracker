

import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class InteractiveElementSkillProtocol extends PacketProtocol {

    constructor() {
        super(219);
    }

    public skillId: number;
    public skillInstanceUid: number;

    public analyze(packet: Packet): void {
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.skillId = object.skillId;
        this.skillInstanceUid = object.skillInstanceUid;
    }
}
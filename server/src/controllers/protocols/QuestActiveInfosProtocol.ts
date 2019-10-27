import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class QuestActiveInfosProtocol extends PacketProtocol {

    constructor() {
        super(381);
    }

    public questId: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.questId = object.questId;
    }
}
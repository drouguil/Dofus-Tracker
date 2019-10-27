import { Packet } from "../models/packets/Packet";

export class PacketProtocol {

    constructor(protected protocolId: number) { }

    public analyze(packet: Packet): void {
        throw new Error("Method not implemented.");
    }

    public parse(packetProtocol: PacketProtocol): void {
        throw new Error("Method not implemented.");
    }
}
import { Packet } from "../models/packets/Packet";
import { BufferHelper } from "./BufferHelper";

class PacketServerSaver {
    public packet: Packet;

    constructor() { }

    public save(packet: Packet): void {

        this.packet = new Packet(new Buffer(packet.data), true);
        this.packet.dataLen = packet.dataLen;
        this.packet.id = packet.id;
    }

    public add(data: Buffer) {
        let arr = [this.packet.data, data];
        this.packet.data = Buffer.concat(arr);
    }
}

export const packetServerSaver = new PacketServerSaver();
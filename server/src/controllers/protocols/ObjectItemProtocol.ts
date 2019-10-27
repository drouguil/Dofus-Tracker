import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { ObjectEffectProtocol } from "./ObjectEffectProtocol";

export class ObjectItemProtocol extends PacketProtocol {

    public position: number;
    public objectGID: number;
    public effects: ObjectEffectProtocol[];
    public objectUID: number;
    public quantity: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.position = object.position;
        this.objectGID = object.objectGID;
        this.effects = object.effects;
        this.objectUID = object.objectUID
        this.quantity = object.quantity;
    }
}
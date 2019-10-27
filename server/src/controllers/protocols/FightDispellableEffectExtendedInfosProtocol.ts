import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { AbstractFightDispellableEffectProtocol } from "./AbstractFightDispellableEffectProtocol";

export class FightDispellableEffectExtendedInfosProtocol extends PacketProtocol {

    constructor() {
        super(208);
    }

    public effect: AbstractFightDispellableEffectProtocol;
    public delta: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.effect = object.effect;
        this.delta = object.delta;
    }
}
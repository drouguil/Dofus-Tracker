import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { AbstractFightDispellableEffectProtocol } from "./AbstractFightDispellableEffectProtocol";

export class FightTemporaryBoostEffectProtocol extends PacketProtocol {

    constructor() {
        super(209);
    }

    public effect: AbstractFightDispellableEffectProtocol;
    public delta: number;

    public analyze(packet: Packet): void {

        this.effect = new AbstractFightDispellableEffectProtocol();

        this.effect.analyze(packet);

        this.delta = BufferHelper.getNumber(packet, 2);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.effect = object.effect;
        this.delta = object.delta;
    }
}
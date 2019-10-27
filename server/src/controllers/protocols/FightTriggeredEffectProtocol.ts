import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { AbstractFightDispellableEffectProtocol } from "./AbstractFightDispellableEffectProtocol";

export class FightTriggeredEffectProtocol extends PacketProtocol {

    constructor() {
        super(210);
    }

    public effect: AbstractFightDispellableEffectProtocol;
    public arg1: number;
    public arg2: number;
    public arg3: number;
    public delay: number;

    public analyze(packet: Packet): void {
        this.effect = new AbstractFightDispellableEffectProtocol();

        this.effect.analyze(packet);

        this.arg1 = BufferHelper.getNumber(packet, 4);

        this.arg2 = BufferHelper.getNumber(packet, 4);

        this.arg3 = BufferHelper.getNumber(packet, 4);

        this.delay = BufferHelper.getNumber(packet, 2, true);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.effect = object.effect;
        this.arg1 = object.arg1;
        this.arg2 = object.arg2;
        this.arg3 = object.arg3;
        this.delay = object.delay;
    }
}
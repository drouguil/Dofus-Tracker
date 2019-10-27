import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTemporaryBoostEffectProtocol } from "./FightTemporaryBoostEffectProtocol";
import { SpellStateEnum } from ".../../../../enums/SpellStateEnum";

export class FightTemporaryBoostStateEffectProtocol extends PacketProtocol {

    constructor() {
        super(214);
    }

    public boost: FightTemporaryBoostEffectProtocol;
    public stateId: SpellStateEnum;

    public analyze(packet: Packet): void {
        this.boost = new FightTemporaryBoostEffectProtocol();

        this.boost.analyze(packet);

        this.stateId = BufferHelper.getNumber(packet, 2);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.boost = object.boost;
        this.stateId = object.stateId;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTemporaryBoostEffectProtocol } from "./FightTemporaryBoostEffectProtocol";

export class FightTemporarySpellBoostEffectProtocol extends PacketProtocol {

    constructor() {
        super(207);
    }

    public boost: FightTemporaryBoostEffectProtocol;
    public boostedSpellId: number;

    public analyze(packet: Packet): void {

        this.boost = new FightTemporaryBoostEffectProtocol();

        this.boost.analyze(packet);

        this.boostedSpellId = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.boost = object.boost;
        this.boostedSpellId = object.boostedSpellId;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightTemporaryBoostEffectProtocol } from "./FightTemporaryBoostEffectProtocol";

export class FightTemporaryBoostWeaponDamagesEffectProtocol extends PacketProtocol {

    constructor() {
        super(211);
    }

    public boost: FightTemporaryBoostEffectProtocol;
    public weaponTypeId: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.boost = object.boost;
        this.weaponTypeId = object.weaponTypeId;
    }
}
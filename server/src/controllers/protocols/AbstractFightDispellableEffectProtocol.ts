import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { FightDispellableEnum } from "../../../../enums/FightDispellableEnum";

export class AbstractFightDispellableEffectProtocol extends PacketProtocol {

    constructor() {
        super(206);
    }

    public uid: number;
    public targetId: number;
    public turnDuration: number;
    public dispellable: FightDispellableEnum;
    public spellId: number;
    public effectId: number;
    public parentBoostUid: number;

    public analyze(packet: Packet): void {
        this.uid = BufferHelper.getSpecialNumber(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.turnDuration = BufferHelper.getNumber(packet, 2, true);

        this.dispellable = BufferHelper.getSpecialNumber(packet);

        this.spellId = BufferHelper.getSpecialNumber(packet);

        this.effectId = BufferHelper.getSpecialNumber(packet);

        this.parentBoostUid = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.uid = object.uid;
        this.targetId = object.targetId;
        this.turnDuration = object.turnDuration;
        this.dispellable = object.dispellable;
        this.spellId = object.spellId;
        this.effectId = object.effectId;
        this.parentBoostUid = object.parentBoostUid;
    }
}
import { PacketProtocol } from '../PacketProtocol';
import { FightDispellableEnum } from '../../../../enums/FightDispellableEnum';

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


    public parse(packetProtocol: any): void {
        this.uid = packetProtocol.uid;
        this.targetId = packetProtocol.targetId;
        this.turnDuration = packetProtocol.turnDuration;
        this.dispellable = packetProtocol.dispellable;
        this.spellId = packetProtocol.spellId;
        this.effectId = packetProtocol.effectId;
        this.parentBoostUid = packetProtocol.parentBoostUid;
    }

    public analyze(): void {
    }
}

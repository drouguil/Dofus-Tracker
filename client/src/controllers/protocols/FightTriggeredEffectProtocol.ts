import { PacketProtocol } from '../PacketProtocol';
import { FightTemporaryBoostEffectProtocol } from './FightTemporaryBoostEffectProtocol';
import { AbstractFightDispellableEffectProtocol } from './AbstractFightDispellableEffectProtocol';

export class FightTriggeredEffectProtocol extends PacketProtocol {

    constructor() {
        super(210);
    }

    public effect: AbstractFightDispellableEffectProtocol;
    public arg1: number;
    public arg2: number;
    public arg3: number;
    public delay: number;

    public parse(packetProtocol: any): void {
        this.effect = packetProtocol.effect;
        this.arg1 = packetProtocol.arg1;
        this.arg2 = packetProtocol.arg2;
        this.arg3 = packetProtocol.arg3;
        this.delay = packetProtocol.delay;
    }

    public analyze(): void {
        const effect = new AbstractFightDispellableEffectProtocol();
        effect.parse(this.effect);
        effect.analyze();
        this.effect = effect;
    }
}

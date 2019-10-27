import { PacketProtocol } from '../PacketProtocol';
import { AbstractFightDispellableEffectProtocol } from './AbstractFightDispellableEffectProtocol';

export class FightTemporaryBoostEffectProtocol extends PacketProtocol {

    constructor() {
        super(209);
    }

    public effect: AbstractFightDispellableEffectProtocol;
    public delta: number;

    public parse(packetProtocol: any): void {
        this.effect = packetProtocol.effect;
        this.delta = packetProtocol.delta;
    }

    public analyze(): void {
        const effect = new AbstractFightDispellableEffectProtocol();
        effect.parse(this.effect);
        effect.analyze();
        this.effect = effect;
    }
}

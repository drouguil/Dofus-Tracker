import { PacketProtocol } from '../PacketProtocol';
import { FightTemporaryBoostEffectProtocol } from './FightTemporaryBoostEffectProtocol';

export class FightTemporarySpellBoostEffectProtocol extends PacketProtocol {

    constructor() {
        super(207);
    }

    public boost: FightTemporaryBoostEffectProtocol;
    public boostedSpellId: number;

    public parse(packetProtocol: any): void {
        this.boost = packetProtocol.boost;
        this.boostedSpellId = packetProtocol.boostedSpellId;
    }

    public analyze(): void {
        const boost = new FightTemporaryBoostEffectProtocol();
        boost.parse(this.boost);
        boost.analyze();
        this.boost = boost;
    }
}

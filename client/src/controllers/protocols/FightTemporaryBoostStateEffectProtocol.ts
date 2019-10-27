import { PacketProtocol } from '../PacketProtocol';
import { FightTemporaryBoostEffectProtocol } from './FightTemporaryBoostEffectProtocol';
import { SpellStateEnum } from '../../../../enums/SpellStateEnum';

export class FightTemporaryBoostStateEffectProtocol extends PacketProtocol {

    constructor() {
        super(214);
    }

    public boost: FightTemporaryBoostEffectProtocol;
    public stateId: SpellStateEnum;

    public parse(packetProtocol: any): void {
        this.boost = packetProtocol.boost;
        this.stateId = packetProtocol.stateId;
    }

    public analyze(): void {
        const boost = new FightTemporaryBoostEffectProtocol();
        boost.parse(this.boost);
        boost.analyze();
        this.boost = boost;
    }
}

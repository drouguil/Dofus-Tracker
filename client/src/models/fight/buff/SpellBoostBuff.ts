import { BoostBuff } from './BoostBuff';
import { FightTemporarySpellBoostEffectProtocol } from '../../../controllers/protocols/FightTemporarySpellBoostEffectProtocol';

export class SpellBoostBuff extends BoostBuff {

    public boostedSpellId: number;

    public parseSpellBoostEffect(effect: FightTemporarySpellBoostEffectProtocol) {
        this.parseBoostEffect(effect.boost, true);
        this.boostedSpellId = effect.boostedSpellId;
        if (this.target) {
            this.target.addSpellBoostBuff(this);
        }
    }
}

import { BoostBuff } from './BoostBuff';
import { FightTemporaryBoostStateEffectProtocol } from '../../../controllers/protocols/FightTemporaryBoostStateEffectProtocol';
import { SpellStateEnum } from '../../../../../enums/SpellStateEnum';
import { ActionEnum } from '../../../../../enums/ActionEnum';

export class StateBoostBuff extends BoostBuff {

    public state: SpellStateEnum;

    public parseStateBoostEffect(effect: FightTemporaryBoostStateEffectProtocol) {
        this.parseBoostEffect(effect.boost, true);
        this.state = effect.stateId;
        if (this.analyzeState() && this.target) {
            this.target.addStateBoostBuff(this);
        }
    }

    private analyzeState(): boolean {
        const toAdd = true;
        switch (this.action) {
            case ActionEnum.FIGHT_SET_STATE:
                break;
            default:
                console.error(this.action);
                break;
        }
        return toAdd;
    }
}

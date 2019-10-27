import { Buff } from './Buff';
import { FightTriggeredEffectProtocol } from '../../../controllers/protocols/FightTriggeredEffectProtocol';
import { ActionEnum } from '../../../../../enums/ActionEnum';
import { Effect } from './effect/Effect';
import { HealPercentEffect } from './effect/HealPercentEffect';
import { DamageSufferedEffect } from './effect/DamageSufferedEffect';
import { HitEffect } from './effect/HitEffect';
import { ElementEnum } from '../../../../../enums/ElementEnum';
import { SetStateEffect } from './effect/SetStateEffect';
import { MalusMpTriggerPushbackDamageEffect } from './effect/MalusMpTriggerPushbackDamageEffect';
import { SendSpellEffect } from './effect/SendSpellEffect';
import { BoostEffect } from './effect/BoostEffect';
import { ResetSpellEffect } from './effect/ResetSpellEffect';

export class TriggeredBuff extends Buff {

    public arg1: number;
    public arg2: number;
    public arg3: number;
    public delay: number;
    public startDelay: number;
    public image: string;
    public effect: Effect;

    public parseTriggeredEffect(effect: FightTriggeredEffectProtocol) {
        this.parseEffect(effect.effect);
        this.arg1 = effect.arg1;
        this.arg2 = effect.arg2;
        this.arg3 = effect.arg3;
        this.delay = effect.delay;
        this.startDelay = effect.delay;
        this.analyzeAction();
        if (this.target) {
            this.target.addTriggeredBuff(this);
        }
    }

    private analyzeAction() {
        switch (this.action) {
            case ActionEnum.CHARACTER_STEAL_NEUTRAL:
            case ActionEnum.CHARACTER_STEAL_EARTH:
            case ActionEnum.CHARACTER_STEAL_FIRE:
            case ActionEnum.CHARACTER_STEAL_WATER:
            case ActionEnum.CHARACTER_STEAL_AIR:
            case ActionEnum.CHARACTER_HIT_NEUTRAL:
            case ActionEnum.CHARACTER_HIT_EARTH:
            case ActionEnum.CHARACTER_HIT_FIRE:
            case ActionEnum.CHARACTER_HIT_WATER:
            case ActionEnum.CHARACTER_HIT_AIR:
                this.effect = new HitEffect(this.action);
                break;
            case ActionEnum.CHARACTER_BONUS_MP_MAX:
                this.effect = new BoostEffect(this.action);
                break;
            case ActionEnum.FIGHT_SET_STATE:
                this.effect = new SetStateEffect(true);
                break;
            case ActionEnum.FIGHT_UNSET_STATE:
                this.effect = new SetStateEffect(false);
                break;
            case ActionEnum.CHARACTER_RESET_SPELL:
                this.effect = new ResetSpellEffect();
                break;
            case ActionEnum.MALUS_MP_TRIGGER_PUSHBACK_DAMAGES:
                this.effect = new MalusMpTriggerPushbackDamageEffect();
                break;
            case ActionEnum.CHARACTER_HEAL_PERCENT:
                this.effect = new HealPercentEffect();
                break;
            case ActionEnum.ALL_TARGET_EFFECT:
                this.effect = new SendSpellEffect(true);
                break;
            case ActionEnum.SEND_SPELL:
                this.effect = new SendSpellEffect(false);
                break;
            case ActionEnum.DAMAGES_SUFFERED:
                this.effect = new DamageSufferedEffect();
                break;
            default:
                console.error(this.action);
                break;
        }
        if (this.effect) {
            this.effect.analyze(this.arg1, this.arg2, this.arg3);
        }
    }
}

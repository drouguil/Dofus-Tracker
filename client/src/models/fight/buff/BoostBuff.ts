import { Buff } from './Buff';
import { FightTemporaryBoostEffectProtocol } from '../../../controllers/protocols/FightTemporaryBoostEffectProtocol';
import { Stats } from '../Stats';
import { ActionEnum } from '../../../../../enums/ActionEnum';
import { FightService } from '../../../app/services/fight.service';

export class BoostBuff extends Buff {

    public delta: number;
    public stats: Stats;
    public image: string;
    public sign = '';

    public parseBoostEffect(effect: FightTemporaryBoostEffectProtocol, isChild = false) {
        this.parseEffect(effect.effect);
        this.delta = effect.delta;
        if (!isChild && this.analyze() && this.target) {
            this.target.addBoostBuff(this);
        }
    }

    public updateDelta(delta: number): void {
        this.delta = delta;
        this.analyze();
    }

    private analyze(): boolean {
        let toAdd = true;
        this.stats = new Stats();
        switch (this.action) {
            case ActionEnum.CHARACTER_UPDATE_BOOST:
                this.image = 'update_boost';
                toAdd = false;
                FightService.instance.updateBoostBuff(this.id, this.delta);
                break;
            case ActionEnum.CHARACTER_MAKE_INVISIBLE:
                this.image = 'invisible';
                this.stats.invisibilityState = this.delta;
                break;
            case ActionEnum.BONUS_DAMAGES_PERCENT:
                this.sign = '+';
                this.image = 'final_damage_percent';
                this.stats.finalDamagePercent = this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_EROSION:
                this.sign = '+';
                this.image = 'erosion_percent';
                this.stats.erosionPercent = this.delta;
                break;
            case ActionEnum.BONUS_MOUNT_XP:
                this.sign = '+';
                this.image = 'mount_xp';
                this.stats.mountXp = this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_AP_MAX:
                this.sign = '+';
                this.image = 'ap';
                this.stats.ap = this.delta;
                this.stats.apCurrent = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_AP_MAX:
                this.sign = '-';
                this.image = 'ap';
                this.stats.ap = -this.delta;
                this.stats.apCurrent = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_AP:
                this.sign = '+';
                this.image = 'ap';
                this.stats.apCurrent = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_AP:
                this.sign = '-';
                this.image = 'ap';
                this.stats.apCurrent = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_MP_MAX:
                this.sign = '+';
                this.image = 'mp';
                this.stats.mp = this.delta;
                this.stats.mpCurrent = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_MP_MAX:
                this.sign = '-';
                this.image = 'mp';
                this.stats.mp = -this.delta;
                this.stats.mpCurrent = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_MP:
                this.sign = '+';
                this.image = 'mp';
                this.stats.mpCurrent = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_MP:
                this.sign = '-';
                this.image = 'mp';
                this.stats.mpCurrent = -this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_CRIT:
                this.sign = '-';
                this.image = 'critical_hit';
                this.stats.criticalHit = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_CRIT:
                this.sign = '+';
                this.image = 'critical_hit';
                this.stats.criticalHit = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_WISDOM:
                this.sign = '-';
                this.image = 'wisdom';
                this.stats.wisdom = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_WISDOM:
                this.sign = '+';
                this.image = 'wisdom';
                this.stats.wisdom = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_STRENGTH:
                this.sign = '-';
                this.image = 'strength';
                this.stats.strength = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_STRENGTH:
                this.sign = '+';
                this.image = 'strength';
                this.stats.strength = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_INTELLIGENCE:
                this.sign = '-';
                this.image = 'intelligence';
                this.stats.intelligence = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_INTELLIGENCE:
                this.sign = '+';
                this.image = 'intelligence';
                this.stats.intelligence = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_CHANCE:
                this.sign = '-';
                this.image = 'chance';
                this.stats.intelligence = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_CHANCE:
                this.sign = '+';
                this.image = 'chance';
                this.stats.chance = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_AGILITY:
                this.sign = '-';
                this.image = 'agility';
                this.stats.agility = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_AGILITY:
                this.sign = '+';
                this.image = 'agility';
                this.stats.agility = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_RANGE:
                this.sign = '-';
                this.image = 'range';
                this.stats.range = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_RANGE:
                this.sign = '+';
                this.image = 'range';
                this.stats.range = this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_SUMMONS:
                this.sign = '+';
                this.image = 'summons';
                this.stats.summons = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_AP_RESISTANCE:
                this.sign = '-';
                this.image = 'ap_resistance';
                this.stats.apResistance = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_AP_RESISTANCE:
                this.sign = '+';
                this.image = 'ap_resistance';
                this.stats.apResistance = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_MP_RESISTANCE:
                this.sign = '-';
                this.image = 'mp_resistance';
                this.stats.mpResistance = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_MP_RESISTANCE:
                this.sign = '+';
                this.image = 'mp_resistance';
                this.stats.mpResistance = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_AP_REDUCTION:
                this.sign = '-';
                this.image = 'ap_reduction';
                this.stats.apReduction = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_AP_REDUCTION:
                this.sign = '+';
                this.image = 'ap_reduction';
                this.stats.apReduction = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_MP_REDUCTION:
                this.sign = '-';
                this.image = 'mp_reduction';
                this.stats.mpReduction = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_MP_REDUCTION:
                this.sign = '+';
                this.image = 'mp_reduction';
                this.stats.mpReduction = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_HEALS:
                this.sign = '-';
                this.image = 'heals';
                this.stats.heals = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_HEALS:
                this.sign = '+';
                this.image = 'heals';
                this.stats.heals = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_DAMAGES:
                this.sign = '-';
                this.image = 'damage';
                this.stats.neutralDamage = -this.delta;
                this.stats.earthDamage = -this.delta;
                this.stats.fireDamage = -this.delta;
                this.stats.waterDamage = -this.delta;
                this.stats.airDamage = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_DAMAGES:
                this.sign = '+';
                this.image = 'damage';
                this.stats.neutralDamage = this.delta;
                this.stats.earthDamage = this.delta;
                this.stats.fireDamage = this.delta;
                this.stats.waterDamage = this.delta;
                this.stats.airDamage = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_DODGE:
                this.sign = '-';
                this.image = 'dodge';
                this.stats.dodge = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_DODGE:
                this.sign = '+';
                this.image = 'dodge';
                this.stats.dodge = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_LOCK:
                this.sign = '-';
                this.image = 'lock';
                this.stats.lock = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_LOCK:
                this.sign = '+';
                this.image = 'lock';
                this.stats.lock = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_DAMAGES_PERCENT:
                this.sign = '-';
                this.image = 'power';
                this.stats.power = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_DAMAGES_PERCENT:
                this.sign = '+';
                this.image = 'power';
                this.stats.power = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_DAMAGES_PUSHBACK:
                this.sign = '-';
                this.image = 'pushback_damage';
                this.stats.pushbackDamage = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_DAMAGES_PUSHBACK:
                this.sign = '+';
                this.image = 'pushback_damage';
                this.stats.pushbackDamage = this.delta;
                break;
            case ActionEnum.BONUS_WEAPON:
                this.sign = '+';
                this.image = 'weapon_power';
                this.stats.weaponPower = this.delta;
                break;
            case ActionEnum.POWER_SPELL:
                this.sign = '+';
                this.image = 'spell_power';
                this.stats.spellPower = this.delta;
                break;
            case ActionEnum.CHARACTER_MALUS_DAMAGES_WEAPON:
                this.sign = '-';
                this.image = 'weapon_damage_percent';
                this.stats.weaponDamagePercent = -this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_DAMAGES_WEAPON:
                this.sign = '+';
                this.image = 'weapon_damage_percent';
                this.stats.weaponDamagePercent = this.delta;
                break;
            case ActionEnum.CHARACTER_BONUS_SHIELD:
                this.sign = '+';
                this.image = 'shield';
                this.stats.shield = this.delta;
                break;
            default:
                this.image = 'unknow';
                console.error(this.action);
                break;
        }
        console.log(this);
        return toAdd;
    }
}

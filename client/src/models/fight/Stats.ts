import { GameFightMinimalStatsProtocol } from '../../controllers/protocols/GameFightMinimalStatsProtocol';
import { GameFightMinimalStatsPreparationProtocol } from '../../controllers/protocols/GameFightMinimalStatsPreparationProtocol';
import { GameActionFightInvisibilityStateEnum } from '../../../../enums/GameActionFightInvisibilityStateEnum';
import { FightService } from '../../app/services/fight.service';
import { Entity } from './entity/Entity';

export class Stats {

    public summoned = false;
    public summoner: Entity | undefined;

    public life: number | undefined;
    public maxLife: number | undefined;
    public baseMaxLife: number | undefined;
    public shield: number | undefined;

    public erosionPercent: number | undefined;

    public apCurrent: number | undefined;
    public mpCurrent: number | undefined;
    public ap: number | undefined;
    public mp: number | undefined;

    public initiative: number | undefined;
    public prospecting: number | undefined;
    public mountXp: number | undefined;
    public range: number | undefined;
    public summons: number | undefined;

    public wisdom: number | undefined;
    public strength: number | undefined;
    public intelligence: number | undefined;
    public chance: number | undefined;
    public agility: number | undefined;

    public apResistance: number | undefined;
    public apReduction: number | undefined;
    public mpResistance: number | undefined;
    public mpReduction: number | undefined;

    public criticalHit: number | undefined;
    public heals: number | undefined;
    public lock: number | undefined;
    public dodge: number | undefined;

    public finalDamagePercent: number | undefined;
    public power: number | undefined;

    public neutralDamage: number | undefined;
    public earthDamage: number | undefined;
    public fireDamage: number | undefined;
    public waterDamage: number | undefined;
    public airDamage: number | undefined;
    public pushbackDamage: number | undefined;
    public criticalDamage: number | undefined;

    public reflect: number | undefined;
    public trapDamage: number | undefined;
    public trapPower: number | undefined;
    public spellPower: number | undefined;
    public weaponPower: number | undefined;
    public glyphPower: number | undefined;
    public runePower: number | undefined;

    public meleeDamagePercent: number | undefined;
    public rangedDamagePercent: number | undefined;
    public weaponDamagePercent: number | undefined;
    public spellDamagePercent: number | undefined;

    public neutralResistancePercent: number | undefined;
    public neutralResistance: number | undefined;
    public earthResistancePercent: number | undefined;
    public earthResistance: number | undefined;
    public fireResistancePercent: number | undefined;
    public fireResistance: number | undefined;
    public waterResistancePercent: number | undefined;
    public waterResistance: number | undefined;
    public airResistancePercent: number | undefined;
    public airResistance: number | undefined;
    public pushbackResistance: number | undefined;
    public criticalResistance: number | undefined;

    public meleeResistancePercent: number | undefined;
    public rangedResistancePercent: number | undefined;
    public weaponResistancePercent: number | undefined;
    public spellResistancePercent: number | undefined;

    public pvpNeutralResistancePercent: number | undefined;
    public pvpNeutralResistance: number | undefined;
    public pvpEarthResistancePercent: number | undefined;
    public pvpEarthResistance: number | undefined;
    public pvpFireResistancePercent: number | undefined;
    public pvpFireResistance: number | undefined;
    public pvpWaterResistancePercent: number | undefined;
    public pvpWaterResistance: number | undefined;
    public pvpAirResistancePercent: number | undefined;
    public pvpAirResistance: number | undefined;

    public invisibilityState: GameActionFightInvisibilityStateEnum | undefined;

    public static initStats(): Stats {
        const stats = new Stats();

        stats.life = 0;
        stats.maxLife = 0;
        stats.baseMaxLife = 0;
        stats.shield = 0;

        stats.erosionPercent = 10;

        stats.apCurrent = 0;
        stats.mpCurrent = 0;
        stats.ap = 0;
        stats.mp = 0;

        stats.initiative = 0;
        stats.prospecting = 100;
        stats.mountXp = 0;
        stats.range = 0;
        stats.summons = 1;

        stats.wisdom = 0;
        stats.strength = 0;
        stats.intelligence = 0;
        stats.chance = 0;
        stats.agility = 0;

        stats.apResistance = 0;
        stats.apReduction = 0;
        stats.mpResistance = 0;
        stats.mpReduction = 0;

        stats.criticalHit = 0;
        stats.heals = 0;
        stats.lock = 0;
        stats.dodge = 0;

        stats.finalDamagePercent = 0;
        stats.power = 0;

        stats.neutralDamage = 0;
        stats.earthDamage = 0;
        stats.fireDamage = 0;
        stats.waterDamage = 0;
        stats.airDamage = 0;
        stats.pushbackDamage = 0;
        stats.criticalDamage = 0;

        stats.reflect = 0;
        stats.trapDamage = 0;
        stats.trapPower = 0;
        stats.spellPower = 0;
        stats.weaponPower = 0;
        stats.glyphPower = 0;
        stats.runePower = 0;

        stats.meleeDamagePercent = 0;
        stats.rangedDamagePercent = 0;
        stats.weaponDamagePercent = 0;
        stats.spellDamagePercent = 0;

        stats.neutralResistancePercent = 0;
        stats.neutralResistance = 0;
        stats.earthResistancePercent = 0;
        stats.earthResistance = 0;
        stats.fireResistancePercent = 0;
        stats.fireResistance = 0;
        stats.waterResistancePercent = 0;
        stats.waterResistance = 0;
        stats.airResistancePercent = 0;
        stats.airResistance = 0;
        stats.pushbackResistance = 0;
        stats.criticalResistance = 0;

        stats.meleeResistancePercent = 0;
        stats.rangedResistancePercent = 0;
        stats.weaponResistancePercent = 0;
        stats.spellResistancePercent = 0;

        stats.pvpNeutralResistancePercent = 0;
        stats.pvpNeutralResistance = 0;
        stats.pvpEarthResistancePercent = 0;
        stats.pvpEarthResistance = 0;
        stats.pvpFireResistancePercent = 0;
        stats.pvpFireResistance = 0;
        stats.pvpWaterResistancePercent = 0;
        stats.pvpWaterResistance = 0;
        stats.pvpAirResistancePercent = 0;
        stats.pvpAirResistance = 0;

        stats.invisibilityState = GameActionFightInvisibilityStateEnum.VISIBLE;

        return new Stats();
    }

    public parse(stats: GameFightMinimalStatsPreparationProtocol) {
        this.initiative = stats.initiative;
        if (stats.stats) {
            this.parseStats(stats.stats);
        }
    }

    public parseStats(stats: GameFightMinimalStatsProtocol) {

        if (stats.summoned) {
            this.summoned = true;
        }
        this.summoner = FightService.instance.getEntityById(stats.summoner);

        this.life = stats.lifePoints;
        this.maxLife = stats.maxLifePoints;
        this.baseMaxLife = stats.baseMaxLifePoints;
        this.shield = stats.shieldPoints;

        this.erosionPercent = stats.permanentDamagePercent;

        this.apCurrent = stats.actionPoints;
        this.mpCurrent = stats.movementPoints;
        this.ap = stats.maxActionPoints;
        this.mp = stats.maxMovementPoints;

        this.apResistance = stats.dodgePALostProbability;
        this.mpResistance = stats.dodgePMLostProbability;

        this.lock = stats.tackleBlock;
        this.dodge = stats.tackleEvade;

        this.meleeResistancePercent = stats.meleeDamageReceivedPercent - 100;
        this.rangedResistancePercent = stats.rangedDamageReceivedPercent - 100;
        this.weaponResistancePercent = stats.weaponDamageReceivedPercent - 100;
        this.spellResistancePercent = stats.spellDamageReceivedPercent - 100;

        this.neutralResistancePercent = stats.neutralElementResistPercent;
        this.neutralResistance = stats.neutralElementReduction;
        this.earthResistancePercent = stats.earthElementResistPercent;
        this.earthResistance = stats.earthElementReduction;
        this.fireResistancePercent = stats.fireElementResistPercent;
        this.fireResistance = stats.fireElementReduction;
        this.waterResistancePercent = stats.waterElementResistPercent;
        this.waterResistance = stats.waterElementReduction;
        this.airResistancePercent = stats.airElementResistPercent;
        this.airResistance = stats.airElementReduction;
        this.pushbackResistance = stats.pushDamageFixedResist;
        this.criticalResistance = stats.criticalDamageFixedResist;

        this.pvpNeutralResistancePercent = stats.pvpNeutralElementResistPercent;
        this.pvpNeutralResistance = stats.pvpNeutralElementReduction;
        this.pvpEarthResistancePercent = stats.pvpEarthElementResistPercent;
        this.pvpEarthResistance = stats.pvpEarthElementReduction;
        this.pvpFireResistancePercent = stats.pvpFireElementResistPercent;
        this.pvpFireResistance = stats.pvpFireElementReduction;
        this.pvpWaterResistancePercent = stats.pvpWaterElementResistPercent;
        this.pvpWaterResistance = stats.pvpWaterElementReduction;
        this.pvpAirResistancePercent = stats.pvpAirElementResistPercent;
        this.pvpAirResistance = stats.pvpAirElementReduction;

        this.invisibilityState = stats.invisibilityState;
    }

    public add(stats: Stats) {
        this.compare('life', stats);
        this.compare('maxLife', stats);
        this.compare('baseMaxLife', stats);
        this.compare('shield', stats);

        this.compare('erosionPercent', stats);

        this.compare('apCurrent', stats);
        this.compare('mpCurrent', stats);
        this.compare('ap', stats);
        this.compare('mp', stats);

        this.compare('initiative', stats);
        this.compare('prospecting', stats);
        this.compare('mountXp', stats);
        this.compare('range', stats);
        this.compare('summons', stats);

        this.compare('wisdom', stats);
        this.compare('strength', stats);
        this.compare('intelligence', stats);
        this.compare('chance', stats);
        this.compare('agility', stats);

        this.compare('apResistance', stats);
        this.compare('apReduction', stats);
        this.compare('mpResistance', stats);
        this.compare('mpReduction', stats);

        this.compare('criticalHit', stats);
        this.compare('heals', stats);
        this.compare('lock', stats);
        this.compare('dodge', stats);

        this.compare('finalDamagePercent', stats);
        this.compare('power', stats);

        this.compare('neutralDamage', stats);
        this.compare('earthDamage', stats);
        this.compare('fireDamage', stats);
        this.compare('waterDamage', stats);
        this.compare('airDamage', stats);
        this.compare('pushbackDamage', stats);
        this.compare('criticalDamage', stats);

        this.compare('reflect', stats);
        this.compare('trapDamage', stats);
        this.compare('trapPower', stats);
        this.compare('spellPower', stats);
        this.compare('weaponPower', stats);
        this.compare('glyphPower', stats);
        this.compare('runePower', stats);

        this.compare('meleeDamagePercent', stats);
        this.compare('rangedDamagePercent', stats);
        this.compare('weaponDamagePercent', stats);
        this.compare('spellDamagePercent', stats);

        this.compare('neutralResistancePercent', stats);
        this.compare('neutralResistance', stats);
        this.compare('earthResistancePercent', stats);
        this.compare('earthResistance', stats);
        this.compare('fireResistancePercent', stats);
        this.compare('fireResistance', stats);
        this.compare('waterResistancePercent', stats);
        this.compare('waterResistance', stats);
        this.compare('airResistancePercent', stats);
        this.compare('airResistance', stats);
        this.compare('pushbackResistance', stats);
        this.compare('criticalResistance', stats);

        this.compare('meleeResistancePercent', stats);
        this.compare('rangedResistancePercent', stats);
        this.compare('weaponResistancePercent', stats);
        this.compare('spellResistancePercent', stats);

        this.compare('meleeResistancePercent', stats);
        this.compare('rangedResistancePercent', stats);
        this.compare('weaponResistancePercent', stats);
        this.compare('spellResistancePercent', stats);

        this.compare('pvpNeutralResistancePercent', stats);
        this.compare('pvpNeutralResistance', stats);
        this.compare('pvpEarthResistancePercent', stats);
        this.compare('pvpEarthResistance', stats);
        this.compare('pvpFireResistancePercent', stats);
        this.compare('pvpFireResistance', stats);
        this.compare('pvpWaterResistancePercent', stats);
        this.compare('pvpWaterResistance', stats);
        this.compare('pvpAirResistancePercent', stats);
        this.compare('pvpAirResistance', stats);

        if (stats.invisibilityState) {
            this.invisibilityState = stats.invisibilityState;
        }
    }

    private compare(property: string, stats: Stats): void {
        if (stats[property] !== undefined) {
            if (this[property] !== undefined) {
                this[property] += stats[property];
            } else {
                this[property] = stats[property];
            }
        }
    }
}

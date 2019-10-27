import { PacketProtocol } from '../PacketProtocol';
import { GameActionFightInvisibilityStateEnum } from '../../../../enums/GameActionFightInvisibilityStateEnum';

export class GameFightMinimalStatsProtocol extends PacketProtocol {

    constructor() {
        super(31);
    }

    public lifePoints: number;
    public maxLifePoints: number;
    public baseMaxLifePoints: number;
    public permanentDamagePercent: number;
    public shieldPoints: number;
    public actionPoints: number;
    public maxActionPoints: number;
    public movementPoints: number;
    public maxMovementPoints: number;
    public summoner: number;
    public summoned: boolean;
    public neutralElementResistPercent: number;
    public earthElementResistPercent: number;
    public waterElementResistPercent: number;
    public airElementResistPercent: number;
    public fireElementResistPercent: number;
    public neutralElementReduction: number;
    public earthElementReduction: number;
    public waterElementReduction: number;
    public airElementReduction: number;
    public fireElementReduction: number;
    public criticalDamageFixedResist: number;
    public pushDamageFixedResist: number;
    public pvpNeutralElementResistPercent: number;
    public pvpEarthElementResistPercent: number;
    public pvpWaterElementResistPercent: number;
    public pvpAirElementResistPercent: number;
    public pvpFireElementResistPercent: number;
    public pvpNeutralElementReduction: number;
    public pvpEarthElementReduction: number;
    public pvpWaterElementReduction: number;
    public pvpAirElementReduction: number;
    public pvpFireElementReduction: number;
    public dodgePALostProbability: number;
    public dodgePMLostProbability: number;
    public tackleBlock: number;
    public tackleEvade: number;
    public fixedDamageReflection: number;
    public invisibilityState: GameActionFightInvisibilityStateEnum;
    public meleeDamageReceivedPercent: number;
    public rangedDamageReceivedPercent: number;
    public weaponDamageReceivedPercent: number;
    public spellDamageReceivedPercent: number;

    public parse(packetProtocol: any): void {
        this.lifePoints = packetProtocol.lifePoints;
        this.maxLifePoints = packetProtocol.maxLifePoints;
        this.baseMaxLifePoints = packetProtocol.baseMaxLifePoints;
        this.permanentDamagePercent = packetProtocol.permanentDamagePercent;
        this.shieldPoints = packetProtocol.shieldPoints;
        this.actionPoints = packetProtocol.actionPoints;
        this.maxActionPoints = packetProtocol.maxActionPoints;
        this.movementPoints = packetProtocol.movementPoints;
        this.maxMovementPoints = packetProtocol.maxMovementPoints;
        this.summoner = packetProtocol.summoner;
        this.summoned = packetProtocol.summoned;
        this.neutralElementResistPercent = packetProtocol.neutralElementResistPercent;
        this.earthElementResistPercent = packetProtocol.earthElementResistPercent;
        this.waterElementResistPercent = packetProtocol.waterElementResistPercent;
        this.airElementResistPercent = packetProtocol.airElementResistPercent;
        this.fireElementResistPercent = packetProtocol.fireElementResistPercent;
        this.neutralElementReduction = packetProtocol.neutralElementReduction;
        this.earthElementReduction = packetProtocol.earthElementReduction;
        this.waterElementReduction = packetProtocol.waterElementReduction;
        this.airElementReduction = packetProtocol.airElementReduction;
        this.fireElementReduction = packetProtocol.fireElementReduction;
        this.criticalDamageFixedResist = packetProtocol.criticalDamageFixedResist;
        this.pushDamageFixedResist = packetProtocol.pushDamageFixedResist;
        this.pvpNeutralElementResistPercent = packetProtocol.pvpNeutralElementResistPercent;
        this.pvpEarthElementResistPercent = packetProtocol.pvpEarthElementResistPercent;
        this.pvpWaterElementResistPercent = packetProtocol.pvpWaterElementResistPercent;
        this.pvpAirElementResistPercent = packetProtocol.pvpAirElementResistPercent;
        this.pvpFireElementResistPercent = packetProtocol.pvpFireElementResistPercent;
        this.pvpNeutralElementReduction = packetProtocol.pvpNeutralElementReduction;
        this.pvpEarthElementReduction = packetProtocol.pvpEarthElementReduction;
        this.pvpWaterElementReduction = packetProtocol.pvpWaterElementReduction;
        this.pvpAirElementReduction = packetProtocol.pvpAirElementReduction;
        this.pvpFireElementReduction = packetProtocol.pvpFireElementReduction;
        this.dodgePALostProbability = packetProtocol.dodgePALostProbability;
        this.dodgePMLostProbability = packetProtocol.dodgePMLostProbability;
        this.tackleBlock = packetProtocol.tackleBlock;
        this.tackleEvade = packetProtocol.tackleEvade;
        this.fixedDamageReflection = packetProtocol.fixedDamageReflection;
        this.invisibilityState = packetProtocol.invisibilityState;
        this.meleeDamageReceivedPercent = packetProtocol.meleeDamageReceivedPercent;
        this.rangedDamageReceivedPercent = packetProtocol.rangedDamageReceivedPercent;
        this.weaponDamageReceivedPercent = packetProtocol.weaponDamageReceivedPercent;
        this.spellDamageReceivedPercent = packetProtocol.spellDamageReceivedPercent;
    }

    public analyze(): void {
        // console.log(this);
    }
}

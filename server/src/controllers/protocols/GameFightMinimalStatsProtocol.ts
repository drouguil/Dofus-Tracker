import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { GameActionFightInvisibilityStateEnum } from "../../../../enums/GameActionFightInvisibilityStateEnum"

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

    public analyze(packet: Packet): void {
        this.lifePoints = BufferHelper.getSpecialNumber(packet);
        this.maxLifePoints = BufferHelper.getSpecialNumber(packet);
        this.baseMaxLifePoints = BufferHelper.getSpecialNumber(packet,);
        this.permanentDamagePercent = BufferHelper.getSpecialNumber(packet);
        this.shieldPoints = BufferHelper.getSpecialNumber(packet);
        this.actionPoints = BufferHelper.getSpecialNumber(packet, true);
        this.maxActionPoints = BufferHelper.getSpecialNumber(packet, true);
        this.movementPoints = BufferHelper.getSpecialNumber(packet, true);
        this.maxMovementPoints = BufferHelper.getSpecialNumber(packet, true);
        this.summoner = BufferHelper.getId8(packet);
        this.summoned = BufferHelper.getBoolean(packet);
        this.neutralElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.earthElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.waterElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.airElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.fireElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.neutralElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.earthElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.waterElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.airElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.fireElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.criticalDamageFixedResist = BufferHelper.getSpecialNumber(packet, true);
        this.pushDamageFixedResist = BufferHelper.getSpecialNumber(packet, true);
        this.pvpNeutralElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.pvpEarthElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.pvpWaterElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.pvpAirElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.pvpFireElementResistPercent = BufferHelper.getSpecialNumber(packet, true);
        this.pvpNeutralElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.pvpEarthElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.pvpWaterElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.pvpAirElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.pvpFireElementReduction = BufferHelper.getSpecialNumber(packet, true);
        this.dodgePALostProbability = BufferHelper.getSpecialNumber(packet, true);
        this.dodgePMLostProbability = BufferHelper.getSpecialNumber(packet, true);
        this.tackleBlock = BufferHelper.getSpecialNumber(packet, true);
        this.tackleEvade = BufferHelper.getSpecialNumber(packet, true);
        this.fixedDamageReflection = BufferHelper.getSpecialNumber(packet, true);
        this.invisibilityState = BufferHelper.getSpecialNumber(packet);
        this.meleeDamageReceivedPercent = BufferHelper.getSpecialNumber(packet);
        this.rangedDamageReceivedPercent = BufferHelper.getSpecialNumber(packet);
        this.weaponDamageReceivedPercent = BufferHelper.getSpecialNumber(packet);
        this.spellDamageReceivedPercent = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.lifePoints = object.lifePoints;
        this.maxLifePoints = object.maxLifePoints;
        this.baseMaxLifePoints = object.baseMaxLifePoints;
        this.permanentDamagePercent = object.permanentDamagePercent;
        this.shieldPoints = object.shieldPoints;
        this.actionPoints = object.actionPoints;
        this.maxActionPoints = object.maxActionPoints;
        this.movementPoints = object.movementPoints;
        this.maxMovementPoints = object.maxMovementPoints;
        this.summoner = object.summoner;
        this.summoned = object.summoned;
        this.neutralElementResistPercent = object.neutralElementResistPercent;
        this.earthElementResistPercent = object.earthElementResistPercent;
        this.waterElementResistPercent = object.waterElementResistPercent;
        this.airElementResistPercent = object.airElementResistPercent;
        this.fireElementResistPercent = object.fireElementResistPercent;
        this.neutralElementReduction = object.neutralElementReduction;
        this.earthElementReduction = object.earthElementReduction;
        this.waterElementReduction = object.waterElementReduction;
        this.airElementReduction = object.airElementReduction;
        this.fireElementReduction = object.fireElementReduction;
        this.criticalDamageFixedResist = object.criticalDamageFixedResist;
        this.pushDamageFixedResist = object.pushDamageFixedResist;
        this.pvpNeutralElementResistPercent = object.pvpNeutralElementResistPercent;
        this.pvpEarthElementResistPercent = object.pvpEarthElementResistPercent;
        this.pvpWaterElementResistPercent = object.pvpWaterElementResistPercent;
        this.pvpAirElementResistPercent = object.pvpAirElementResistPercent;
        this.pvpFireElementResistPercent = object.pvpFireElementResistPercent;
        this.pvpNeutralElementReduction = object.pvpNeutralElementReduction;
        this.pvpEarthElementReduction = object.pvpEarthElementReduction;
        this.pvpWaterElementReduction = object.pvpWaterElementReduction;
        this.pvpAirElementReduction = object.pvpAirElementReduction;
        this.pvpFireElementReduction = object.pvpFireElementReduction;
        this.dodgePALostProbability = object.dodgePALostProbability;
        this.dodgePMLostProbability = object.dodgePMLostProbability;
        this.tackleBlock = object.tackleBlock;
        this.tackleEvade = object.tackleEvade;
        this.fixedDamageReflection = object.fixedDamageReflection;
        this.invisibilityState = object.invisibilityState;
        this.meleeDamageReceivedPercent = object.meleeDamageReceivedPercent
        this.rangedDamageReceivedPercent = object.rangedDamageReceivedPercent;
        this.weaponDamageReceivedPercent = object.weaponDamageReceivedPercent;
        this.spellDamageReceivedPercent = object.spellDamageReceivedPercent;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { ActorExtendedAlignmentInfosProtocol } from "../protocols/ActorExtendedAlignmentInfosProtocol";
import { CharacterBaseCharacteristicProtocol } from "../protocols/CharacterBaseCharacteristicProtocol";
import { CharacterSpellModificationProtocol } from "./CharacterSpellModificationProtocol";

export class CharacterCharacteristicsInfosProtocol extends PacketProtocol {

    constructor() {
        super(8);
    }

    public experience: number;
    public experienceLevelFloor: number;
    public experienceNextLevelFloor: number;
    public experienceBonusLimit: number;
    public kamas: number;
    public statsPoints: number;
    public additionnalPoints: number;
    public spellsPoints: number;
    public alignmentInfos: ActorExtendedAlignmentInfosProtocol;
    public life: number;
    public maxLife: number;
    public energyPoints: number;
    public maxEnergyPoints: number;
    public actionPointsCurrent: number;
    public movementPointsCurrent: number;
    public initiative: CharacterBaseCharacteristicProtocol;
    public prospecting: CharacterBaseCharacteristicProtocol;
    public ap: CharacterBaseCharacteristicProtocol;
    public mp: CharacterBaseCharacteristicProtocol;
    public strength: CharacterBaseCharacteristicProtocol;
    public vitality: CharacterBaseCharacteristicProtocol;
    public wisdom: CharacterBaseCharacteristicProtocol;
    public chance: CharacterBaseCharacteristicProtocol;
    public agility: CharacterBaseCharacteristicProtocol;
    public intelligence: CharacterBaseCharacteristicProtocol;
    public range: CharacterBaseCharacteristicProtocol;
    public summons: CharacterBaseCharacteristicProtocol;
    public reflect: CharacterBaseCharacteristicProtocol;
    public criticalHit: CharacterBaseCharacteristicProtocol;
    public criticalHitWeapon: number;
    public criticalMiss: CharacterBaseCharacteristicProtocol;
    public healBonus: CharacterBaseCharacteristicProtocol;
    public allDamagesBonus: CharacterBaseCharacteristicProtocol;
    public weaponDamagesBonusPercent: CharacterBaseCharacteristicProtocol;
    public damagesBonusPercent: CharacterBaseCharacteristicProtocol;
    public trapBonus: CharacterBaseCharacteristicProtocol;
    public trapBonusPercent: CharacterBaseCharacteristicProtocol;
    public glyphBonusPercent: CharacterBaseCharacteristicProtocol;
    public runeBonusPercent: CharacterBaseCharacteristicProtocol;
    public permanentDamagePercent: CharacterBaseCharacteristicProtocol;
    public tackleBlock: CharacterBaseCharacteristicProtocol;
    public tackleEvade: CharacterBaseCharacteristicProtocol;
    public paAttack: CharacterBaseCharacteristicProtocol;
    public pmAttack: CharacterBaseCharacteristicProtocol;
    public pushDamageBonus: CharacterBaseCharacteristicProtocol;
    public criticalDamageBonus: CharacterBaseCharacteristicProtocol;
    public neutralDamageBonus: CharacterBaseCharacteristicProtocol;
    public earthDamageBonus: CharacterBaseCharacteristicProtocol;
    public waterDamageBonus: CharacterBaseCharacteristicProtocol;
    public airDamageBonus: CharacterBaseCharacteristicProtocol;
    public fireDamageBonus: CharacterBaseCharacteristicProtocol;
    public dodgePALostProbability: CharacterBaseCharacteristicProtocol;
    public dodgePMLostProbability: CharacterBaseCharacteristicProtocol;
    public neutralElementResistPercent: CharacterBaseCharacteristicProtocol;
    public earthElementResistPercent: CharacterBaseCharacteristicProtocol;
    public waterElementResistPercent: CharacterBaseCharacteristicProtocol;
    public airElementResistPercent: CharacterBaseCharacteristicProtocol;
    public fireElementResistPercent: CharacterBaseCharacteristicProtocol;
    public neutralElementReduction: CharacterBaseCharacteristicProtocol;
    public earthElementReduction: CharacterBaseCharacteristicProtocol;
    public waterElementReduction: CharacterBaseCharacteristicProtocol;
    public airElementReduction: CharacterBaseCharacteristicProtocol;
    public fireElementReduction: CharacterBaseCharacteristicProtocol;
    public pushDamageReduction: CharacterBaseCharacteristicProtocol;
    public criticalDamageReduction: CharacterBaseCharacteristicProtocol;
    public pvpNeutralElementResistPercent: CharacterBaseCharacteristicProtocol;
    public pvpEarthElementResistPercent: CharacterBaseCharacteristicProtocol;
    public pvpWaterElementResistPercent: CharacterBaseCharacteristicProtocol;
    public pvpAirElementResistPercent: CharacterBaseCharacteristicProtocol;
    public pvpFireElementResistPercent: CharacterBaseCharacteristicProtocol;
    public pvpNeutralElementReduction: CharacterBaseCharacteristicProtocol;
    public pvpEarthElementReduction: CharacterBaseCharacteristicProtocol;
    public pvpWaterElementReduction: CharacterBaseCharacteristicProtocol;
    public pvpAirElementReduction: CharacterBaseCharacteristicProtocol;
    public pvpFireElementReduction: CharacterBaseCharacteristicProtocol;
    public meleeDamageBonus: CharacterBaseCharacteristicProtocol;
    public meleeDamageReduction: CharacterBaseCharacteristicProtocol;
    public rangeDamageBonus: CharacterBaseCharacteristicProtocol;
    public rangeDamageReduction: CharacterBaseCharacteristicProtocol;
    public weaponDamageBonus: CharacterBaseCharacteristicProtocol;
    public weaponDamageReduction: CharacterBaseCharacteristicProtocol;
    public spellDamageBonus: CharacterBaseCharacteristicProtocol;
    public spellDamageReduction: CharacterBaseCharacteristicProtocol;
    public spellModifications: CharacterSpellModificationProtocol[];
    public probationTime: number;

    public analyze(packet: Packet): void {

        this.experience = BufferHelper.getSpecialNumber(packet);

        this.experienceLevelFloor = BufferHelper.getSpecialNumber(packet);

        this.experienceNextLevelFloor = BufferHelper.getSpecialNumber(packet);

        this.experienceBonusLimit = BufferHelper.getSpecialNumber(packet);

        this.kamas = BufferHelper.getSpecialNumber(packet);

        this.statsPoints = BufferHelper.getSpecialNumber(packet);

        this.additionnalPoints = BufferHelper.getSpecialNumber(packet);

        this.spellsPoints = BufferHelper.getSpecialNumber(packet);

        this.alignmentInfos = new ActorExtendedAlignmentInfosProtocol();

        this.alignmentInfos.analyze(packet);

        this.life = BufferHelper.getSpecialNumber(packet);

        this.maxLife = BufferHelper.getSpecialNumber(packet);

        this.energyPoints = BufferHelper.getSpecialNumber(packet);

        this.maxEnergyPoints = BufferHelper.getSpecialNumber(packet);

        this.actionPointsCurrent = BufferHelper.getSpecialNumber(packet);

        this.movementPointsCurrent = BufferHelper.getSpecialNumber(packet);

        this.initiative = new CharacterBaseCharacteristicProtocol();

        this.initiative.analyze(packet);

        this.prospecting = new CharacterBaseCharacteristicProtocol();

        this.prospecting.analyze(packet);

        this.ap = new CharacterBaseCharacteristicProtocol();

        this.ap.analyze(packet);

        this.mp = new CharacterBaseCharacteristicProtocol();

        this.mp.analyze(packet);

        this.strength = new CharacterBaseCharacteristicProtocol();

        this.strength.analyze(packet);

        this.vitality = new CharacterBaseCharacteristicProtocol();

        this.vitality.analyze(packet);

        this.wisdom = new CharacterBaseCharacteristicProtocol();

        this.wisdom.analyze(packet);

        this.chance = new CharacterBaseCharacteristicProtocol();

        this.chance.analyze(packet);

        this.agility = new CharacterBaseCharacteristicProtocol();

        this.agility.analyze(packet);

        this.intelligence = new CharacterBaseCharacteristicProtocol();

        this.intelligence.analyze(packet);

        this.range = new CharacterBaseCharacteristicProtocol();

        this.range.analyze(packet);

        this.summons = new CharacterBaseCharacteristicProtocol();

        this.summons.analyze(packet);

        this.reflect = new CharacterBaseCharacteristicProtocol();

        this.reflect.analyze(packet);

        this.criticalHit = new CharacterBaseCharacteristicProtocol();

        this.criticalHit.analyze(packet);

        this.criticalHitWeapon = BufferHelper.getSpecialNumber(packet);

        this.criticalMiss = new CharacterBaseCharacteristicProtocol();

        this.criticalMiss.analyze(packet);

        this.healBonus = new CharacterBaseCharacteristicProtocol();

        this.healBonus.analyze(packet);

        this.allDamagesBonus = new CharacterBaseCharacteristicProtocol();

        this.allDamagesBonus.analyze(packet);

        this.weaponDamagesBonusPercent = new CharacterBaseCharacteristicProtocol();

        this.weaponDamagesBonusPercent.analyze(packet);

        this.damagesBonusPercent = new CharacterBaseCharacteristicProtocol();

        this.damagesBonusPercent.analyze(packet);

        this.trapBonus = new CharacterBaseCharacteristicProtocol();

        this.trapBonus.analyze(packet);

        this.trapBonusPercent = new CharacterBaseCharacteristicProtocol();

        this.trapBonusPercent.analyze(packet);

        this.glyphBonusPercent = new CharacterBaseCharacteristicProtocol();

        this.glyphBonusPercent.analyze(packet);

        this.runeBonusPercent = new CharacterBaseCharacteristicProtocol();

        this.runeBonusPercent.analyze(packet);

        this.permanentDamagePercent = new CharacterBaseCharacteristicProtocol();

        this.permanentDamagePercent.analyze(packet);

        this.tackleBlock = new CharacterBaseCharacteristicProtocol();

        this.tackleBlock.analyze(packet);

        this.tackleEvade = new CharacterBaseCharacteristicProtocol();

        this.tackleEvade.analyze(packet);

        this.paAttack = new CharacterBaseCharacteristicProtocol();

        this.paAttack.analyze(packet);

        this.pmAttack = new CharacterBaseCharacteristicProtocol();

        this.pmAttack.analyze(packet);

        this.pushDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.pushDamageBonus.analyze(packet);

        this.criticalDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.criticalDamageBonus.analyze(packet);

        this.neutralDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.neutralDamageBonus.analyze(packet);

        this.earthDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.earthDamageBonus.analyze(packet);

        this.waterDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.waterDamageBonus.analyze(packet);

        this.airDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.airDamageBonus.analyze(packet);

        this.fireDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.fireDamageBonus.analyze(packet);

        this.dodgePALostProbability = new CharacterBaseCharacteristicProtocol();

        this.dodgePALostProbability.analyze(packet);

        this.dodgePMLostProbability = new CharacterBaseCharacteristicProtocol();

        this.dodgePMLostProbability.analyze(packet);

        this.neutralElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.neutralElementResistPercent.analyze(packet);

        this.earthElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.earthElementResistPercent.analyze(packet);

        this.waterElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.waterElementResistPercent.analyze(packet);

        this.airElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.airElementResistPercent.analyze(packet);

        this.fireElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.fireElementResistPercent.analyze(packet);

        this.neutralElementReduction = new CharacterBaseCharacteristicProtocol();

        this.neutralElementReduction.analyze(packet);

        this.earthElementReduction = new CharacterBaseCharacteristicProtocol();

        this.earthElementReduction.analyze(packet);

        this.waterElementReduction = new CharacterBaseCharacteristicProtocol();

        this.waterElementReduction.analyze(packet);

        this.airElementReduction = new CharacterBaseCharacteristicProtocol();

        this.airElementReduction.analyze(packet);

        this.fireElementReduction = new CharacterBaseCharacteristicProtocol();

        this.fireElementReduction.analyze(packet);

        this.criticalDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.criticalDamageReduction.analyze(packet);

        this.pushDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.pushDamageReduction.analyze(packet);

        this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.pvpNeutralElementResistPercent.analyze(packet);

        this.pvpEarthElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.pvpEarthElementResistPercent.analyze(packet);

        this.pvpWaterElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.pvpWaterElementResistPercent.analyze(packet);

        this.pvpAirElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.pvpAirElementResistPercent.analyze(packet);

        this.pvpFireElementResistPercent = new CharacterBaseCharacteristicProtocol();

        this.pvpFireElementResistPercent.analyze(packet);

        this.pvpNeutralElementReduction = new CharacterBaseCharacteristicProtocol();

        this.pvpNeutralElementReduction.analyze(packet);

        this.pvpEarthElementReduction = new CharacterBaseCharacteristicProtocol();

        this.pvpEarthElementReduction.analyze(packet);

        this.pvpWaterElementReduction = new CharacterBaseCharacteristicProtocol();

        this.pvpWaterElementReduction.analyze(packet);

        this.pvpAirElementReduction = new CharacterBaseCharacteristicProtocol();

        this.pvpAirElementReduction.analyze(packet);

        this.pvpFireElementReduction = new CharacterBaseCharacteristicProtocol();

        this.pvpFireElementReduction.analyze(packet);

        this.meleeDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.meleeDamageBonus.analyze(packet);

        this.meleeDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.meleeDamageReduction.analyze(packet);

        this.rangeDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.rangeDamageBonus.analyze(packet);

        this.rangeDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.rangeDamageReduction.analyze(packet);

        this.weaponDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.weaponDamageBonus.analyze(packet);

        this.weaponDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.weaponDamageReduction.analyze(packet);

        this.spellDamageBonus = new CharacterBaseCharacteristicProtocol();

        this.spellDamageBonus.analyze(packet);

        this.spellDamageReduction = new CharacterBaseCharacteristicProtocol();

        this.spellDamageReduction.analyze(packet);

        const spellModificationsLength = BufferHelper.getNumber(packet, 2);

        this.spellModifications = new Array();

        for (let index = 0; index < spellModificationsLength; index++) {
            const spellModification = new CharacterSpellModificationProtocol();
            spellModification.analyze(packet);
            this.spellModifications.push(spellModification);
        }

        this.probationTime = BufferHelper.getNumber(packet, 4);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.experience = object.experience;
        this.experienceLevelFloor = object.experienceLevelFloor;
        this.experienceNextLevelFloor = object.experienceNextLevelFloor;
        this.experienceBonusLimit = object.experienceBonusLimit;
        this.kamas = object.kamas;
        this.statsPoints = object.statsPoints;
        this.additionnalPoints = object.additionnalPoints;
        this.spellsPoints = object.spellsPoints;
        this.alignmentInfos = object.alignmentInfos;
        this.life = object.life;
        this.maxLife = object.maxLife;
        this.energyPoints = object.energyPoints;
        this.maxEnergyPoints = object.maxEnergyPoints;
        this.actionPointsCurrent = object.actionPointsCurrent;
        this.movementPointsCurrent = object.movementPointsCurrent;
        this.initiative = object.initiative;
        this.prospecting = object.prospecting;
        this.ap = object.ap;
        this.mp = object.mp;
        this.strength = object.strength;
        this.vitality = object.vitality;
        this.wisdom = object.wisdom;
        this.chance = object.chance;
        this.agility = object.agility;
        this.intelligence = object.intelligence;
        this.range = object.range;
        this.summons = object.summons;
        this.reflect = object.reflect;
        this.criticalHit = object.criticalHit;
        this.criticalHitWeapon = object.criticalHitWeapon;
        this.criticalMiss = object.criticalMiss;
        this.healBonus = object.healBonus;
        this.allDamagesBonus = object.allDamagesBonus;
        this.weaponDamagesBonusPercent = object.weaponDamagesBonusPercent;
        this.damagesBonusPercent = object.damagesBonusPercent;
        this.trapBonus = object.trapBonus;
        this.trapBonusPercent = object.trapBonusPercent;
        this.glyphBonusPercent = object.glyphBonusPercent;
        this.runeBonusPercent = object.runeBonusPercent;
        this.permanentDamagePercent = object.permanentDamagePercent;
        this.tackleBlock = object.tackleBlock;
        this.tackleEvade = object.tackleEvade;
        this.paAttack = object.paAttack;
        this.pmAttack = object.pmAttack;
        this.pushDamageBonus = object.pushDamageBonus;
        this.criticalDamageBonus = object.criticalDamageBonus;
        this.neutralDamageBonus = object.neutralDamageBonus;
        this.earthDamageBonus = object.earthDamageBonus;
        this.waterDamageBonus = object.waterDamageBonus;
        this.airDamageBonus = object.airDamageBonus;
        this.fireDamageBonus = object.fireDamageBonus;
        this.dodgePALostProbability = object.dodgePALostProbability;
        this.dodgePMLostProbability = object.dodgePMLostProbability;
        this.neutralElementResistPercent = object.neutralElementResistPercent;
        this.earthElementResistPercent = object.earthElementResistPercent;
        this.waterElementResistPercent = object.waterElementResistPercent;
        this.airElementResistPercent = object.airElementResistPercent;
        this.fireElementResistPercent = object.fireElementResistPercent;
        this.neutralElementReduction = object.neutralElementReduction;
        this.earthElementReduction = object.earthElementReduction;
        this.waterElementReduction = object.waterElementReduction;
        this.airElementReduction = object.airElementReduction;
        this.pushDamageReduction = object.pushDamageReduction;
        this.criticalDamageReduction = object.criticalDamageReduction;
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
        this.meleeDamageBonus = object.meleeDamageBonus;
        this.meleeDamageReduction = object.meleeDamageReduction;
        this.rangeDamageBonus = object.rangeDamageBonus;
        this.rangeDamageReduction = object.rangeDamageReduction;
        this.weaponDamageBonus = object.weaponDamageBonus;
        this.weaponDamageReduction = object.weaponDamageReduction;
        this.spellDamageBonus = object.spellDamageBonus;
        this.spellDamageReduction = object.spellDamageReduction;
        this.spellModifications = object.spellModifications;
        this.probationTime = object.probationTime;
    }
}
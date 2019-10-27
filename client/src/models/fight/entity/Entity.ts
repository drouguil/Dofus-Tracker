import { Cell } from '../Cell';
import { TeamFightEnum } from '../../../../../enums/TeamFightEnum';
import { DirectionEnum } from '../../../../../enums/DirectionEnum';
import { Stats } from '../Stats';
import { ActionEnum } from '../../../../../enums/ActionEnum';
import { MapService } from '../../../app/services/map.service';
import { SequenceService } from '../../../app/services/sequence.service';
import { TriggeredBuff } from '../buff/TriggeredBuff';
import { SpellBoostBuff } from '../buff/SpellBoostBuff';
import { StateBoostBuff } from '../buff/StateBoostBuff';
import { BoostBuff } from '../buff/BoostBuff';
import { Buff } from '../buff/Buff';
import { SpellStateEnum } from '../../../../../enums/SpellStateEnum';
import { Spell } from '../Spell';
import { GameActionFightInvisibilityStateEnum } from '../../../../../enums/GameActionFightInvisibilityStateEnum';
import { FightService } from '../../../app/services/fight.service';

export class Entity {

    public isHover: boolean;
    public isTurn: boolean;
    public isAlive: boolean;
    public isStatic: boolean;
    public name: string;
    public team: TeamFightEnum;
    public stats: Stats;
    public level: number;
    public summoned = false;
    public summoner: Entity | undefined;
    public summons: Entity[];
    public triggeredBuffs: TriggeredBuff[];
    public spellBoostBuffs: SpellBoostBuff[];
    public stateBoostBuffs: StateBoostBuff[];
    public boostBuffs: BoostBuff[];
    public states: SpellStateEnum[];

    constructor(
        public id: number,
        public direction: DirectionEnum,
        public cellId: number
    ) {
        this.isHover = false;
        this.isTurn = false;
        this.isAlive = true;
        this.isStatic = true;
        this.name = 'Entity';
        this.team = TeamFightEnum.UNKNOW;
        this.level = 0;
        this.stats = Stats.initStats();
        this.summons = new Array();
        this.triggeredBuffs = new Array();
        this.spellBoostBuffs = new Array();
        this.stateBoostBuffs = new Array();
        this.boostBuffs = new Array();
        this.states = new Array();
    }

    public setCell(cellId: number) {
        const oldCell: Cell | undefined = MapService.instance.getCellById(this.cellId);
        if (oldCell) {
            oldCell.entity = undefined;
        }
        this.cellId = cellId;
        const newCell: Cell | undefined = MapService.instance.getCellById(cellId);
        if (newCell) {
            newCell.entity = this;
        }
    }

    public applyAction(action: ActionEnum, delta: number): void {
        const sequence = SequenceService.instance.getSequenceByEntityId(this.id);
        switch (action) {
            case ActionEnum.CHARACTER_MALUS_AP:
                this.useAp(delta);
                if (sequence) {
                    sequence.apLoss = delta;
                } else {
                    console.error(this.id);
                }
                break;
            case ActionEnum.CHARACTER_MALUS_MP:
                this.useMp(delta);
                if (sequence) {
                    sequence.mpLoss = delta;
                } else {
                    console.error(this.id);
                }
                break;
            case ActionEnum.CHARACTER_USE_MP:
                this.useMp(delta);
                break;
            case ActionEnum.CHARACTER_USE_AP:
                this.useAp(delta);
                if (sequence) {
                    sequence.apCost = -delta;
                } else {
                    console.error(this.id);
                }
                break;
            default:
                console.error(action);
                break;
        }
    }

    public teleport(action: ActionEnum, cellId: number): void {
        switch (action) {
            case ActionEnum.CHARACTER_TELEPORT_SAME_MAP:
                this.setCell(cellId);
                break;
            default:
                console.error(action);
                break;
        }
    }

    public slide(action: ActionEnum, startCellId: number, endCellId: number): void {
        switch (action) {
            case ActionEnum.CHARACTER_PUSH:
                this.setCell(endCellId);
                break;
            default:
                console.error(action);
                break;
        }
    }

    public looseLifePoints(action: ActionEnum, loss: number, permanenteDamages: number): void {
        switch (action) {
            case ActionEnum.CHARACTER_HIT_NEUTRAL:
            case ActionEnum.CHARACTER_HIT_EARTH:
            case ActionEnum.CHARACTER_HIT_FIRE:
            case ActionEnum.CHARACTER_HIT_WATER:
            case ActionEnum.CHARACTER_HIT_AIR:
            case ActionEnum.CHARACTER_HIT_PUSHBACK:
            case ActionEnum.CHARACTER_STEAL_NEUTRAL:
            case ActionEnum.CHARACTER_STEAL_EARTH:
            case ActionEnum.CHARACTER_STEAL_FIRE:
            case ActionEnum.CHARACTER_STEAL_WATER:
            case ActionEnum.CHARACTER_STEAL_AIR:
                this.hit(loss, permanenteDamages);
                break;
            default:
                console.error(action);
                break;
        }
    }

    public gainLifePoints(action: ActionEnum, delta: number): void {
        switch (action) {
            case ActionEnum.CHARACTER_HEAL:
                this.heal(delta);
                break;
            default:
                console.error(action);
                break;
        }
    }

    public death(action: ActionEnum) {
        switch (action) {
            case ActionEnum.CHARACTER_DEATH:
                this.isAlive = false;
                this.setCell(-1);
                break;
            default:
                console.error(action);
                break;
        }
        FightService.instance.deathEntity(this);
    }

    public endTurn() {
        this.isTurn = false;
        this.stats.apCurrent = this.stats.ap;
        this.stats.mpCurrent = this.stats.mp;
    }

    public useAp(delta: number): void {
        if (this.stats.apCurrent !== undefined) {
            this.stats.apCurrent += delta;
        } else {
            console.error(delta);
        }
    }

    public useMp(delta: number): void {
        if (this.stats.mpCurrent !== undefined) {
            this.stats.mpCurrent += delta;
        } else {
            console.error(delta);
        }
    }

    public hit(loss: number, permanenteDamages: number): void {
        if (this.stats.life !== undefined) {
            this.stats.life -= loss;
        } else {
            console.error(loss);
        }
        if (this.stats.maxLife !== undefined) {
            this.stats.maxLife -= permanenteDamages;
        } else {
            console.error(permanenteDamages);
        }
    }

    public heal(delta: number): void {
        if (this.stats.life !== undefined) {
            this.stats.life += delta;
        } else {
            console.error(delta);
        }
    }

    public addBoostBuff(buff: BoostBuff): void {
        this.boostBuffs.push(buff);
    }

    public addSpellBoostBuff(buff: SpellBoostBuff): void {
        this.spellBoostBuffs.push(buff);
    }

    public addStateBoostBuff(buff: StateBoostBuff): void {
        this.stateBoostBuffs.push(buff);
        switch (buff.state) {
            case SpellStateEnum.PESANTEUR:
            case SpellStateEnum.AFFAIBLI:
            case SpellStateEnum.INVULNERABLE:
            case SpellStateEnum.INSOIGNABLE:
            case SpellStateEnum.INDEPLACABLE:
            case SpellStateEnum.IVOIRE:
                this.states.push(buff.state);
                break;
        }
    }

    public addTriggeredBuff(buff: TriggeredBuff): void {
        this.triggeredBuffs.push(buff);
    }

    public dispell(actionId: ActionEnum): void {
        switch (actionId) {
            default:
                console.error(actionId);
                break;
        }
    }

    public dispellSpell(actionId: ActionEnum, spellId: number): void {
        switch (actionId) {
            case ActionEnum.CHARACTER_RESET_SPELL:
                this.resetSpell(spellId);
                break;
            default:
                console.error(actionId, spellId);
                break;
        }
    }

    public dispellEffect(actionId: ActionEnum, boostUID: number): void {
        switch (actionId) {
            case ActionEnum.CHARACTER_BOOST_DISPELLED:
                this.dispellBoost(boostUID);
                break;
            default:
                console.error(actionId, boostUID);
                break;
        }
    }

    public invisibility(actionId: ActionEnum, state: GameActionFightInvisibilityStateEnum): void {
        switch (actionId) {
            case ActionEnum.CHARACTER_MAKE_INVISIBLE:
                this.setCell(-1);
                break;
            default:
                console.error(actionId, state);
                break;
        }
    }

    public invisibilityDetected(actionId: ActionEnum, cellId: number): void {
        switch (actionId) {
            case ActionEnum.CHARACTER_MAKE_INVISIBLE:
                break;
            case ActionEnum.FIGHT_CAST_SPELL_INVISIBLE:
                break;
            default:
                console.error(actionId, cellId);
                break;
        }
    }

    public getStats(): Stats {
        const stats = new Stats();
        stats.add(this.stats);
        this.boostBuffs.forEach((buff: BoostBuff) => {
            stats.add(buff.stats);
        });
        return stats;
    }

    public removeBuff(buff: Buff): any {
        let index: number;
        if (buff instanceof SpellBoostBuff) {
            index = this.spellBoostBuffs.indexOf(buff);
            if (index > -1) {
                this.spellBoostBuffs.splice(index, 1);
            }
        } else if (buff instanceof StateBoostBuff) {
            index = this.stateBoostBuffs.indexOf(buff);
            if (index > -1) {
                this.removeState(buff.state);
                this.stateBoostBuffs.splice(index, 1);
            }
        } else if (buff instanceof BoostBuff) {
            index = this.boostBuffs.indexOf(buff);
            if (index > -1) {
                this.boostBuffs.splice(index, 1);
            }
        } else if (buff instanceof TriggeredBuff) {
            index = this.triggeredBuffs.indexOf(buff);
            if (index > -1) {
                this.triggeredBuffs.splice(index, 1);
            }
        } else {
            console.error(buff);
        }
    }

    private resetSpell(spellId: number) {

        const buffs = FightService.instance.getBuffsBySpellId(spellId);

        buffs.forEach((buff: Buff) => {
            FightService.instance.deleteBoostById(buff.id);
            if (buff instanceof TriggeredBuff) {
                const index = this.triggeredBuffs.indexOf(buff);
                if (index > -1) {
                    this.triggeredBuffs.splice(index, 1);
                }
            } else if (buff instanceof StateBoostBuff) {
                const index = this.stateBoostBuffs.indexOf(buff);
                if (index > -1) {
                    this.removeState(buff.state);
                    this.stateBoostBuffs.splice(index, 1);
                }
            } else if (buff instanceof SpellBoostBuff) {
                const index = this.spellBoostBuffs.indexOf(buff);
                if (index > -1) {
                    this.spellBoostBuffs.splice(index, 1);
                }
            } else if (buff instanceof BoostBuff) {
                const index = this.boostBuffs.indexOf(buff);
                if (index > -1) {
                    this.boostBuffs.splice(index, 1);
                }
            } else {
                console.error(buff);
            }
        });
    }

    private dispellBoost(boostUID: number) {
        const buff = FightService.instance.getBuffById(boostUID);
        if (buff) {
            FightService.instance.deleteBoostById(boostUID);
            this.removeBuff(buff);
        }
    }

    private removeState(state: SpellStateEnum) {
        const index = this.states.indexOf(state);
        if (index > -1) {
            this.states.splice(index, 1);
        }
    }
}

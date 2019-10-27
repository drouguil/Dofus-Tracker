import { Entity } from '../entity/Entity';
import { FightDispellableEnum } from '../../../../../enums/FightDispellableEnum';
import { Spell } from '../Spell';
import { AbstractFightDispellableEffectProtocol } from '../../../controllers/protocols/AbstractFightDispellableEffectProtocol';
import { FightService } from '../../../app/services/fight.service';
import { ActionEnum } from '../../../../../enums/ActionEnum';

export class Buff {

    public id: number;
    public author: Entity;
    public target: Entity | undefined;
    public duration: number;
    public startDuration: number;
    public dispellable: FightDispellableEnum;
    public spell: Spell | number;
    public effectId: number;
    public parent: Buff | undefined;
    public action: ActionEnum;

    constructor() {
        console.log(this);
    }

    public parseEffect(effect: AbstractFightDispellableEffectProtocol) {
        this.id = effect.uid;
        this.target = FightService.instance.getEntityById(effect.targetId);

        if (this.target) {
            FightService.instance.setBuff(this);
        } else {
            console.error(effect.targetId);
        }

        this.duration = effect.turnDuration;
        this.startDuration = effect.turnDuration;
        this.dispellable = effect.dispellable;
        this.spell = effect.spellId;
        this.effectId = effect.effectId;
        this.parent = FightService.instance.getBuffById(effect.parentBoostUid);
    }

    public reduceBuff(entity: Entity): boolean {
        let toRemove = false;
        if (entity === this.author) {
            this.duration--;
            if (this.duration === 0) {
                toRemove = true;
                if (this.target) {
                    this.target.removeBuff(this);
                }
            }
        }
        return toRemove;
    }

    public deathEntity(entity: Entity): boolean {
        let toRemove = false;
        if (entity === this.author) {
            toRemove = true;
            if (this.target) {
                this.target.removeBuff(this);
            }
        }
        return toRemove;
    }
}

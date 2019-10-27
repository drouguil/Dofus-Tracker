import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { FightSpellCastCriticalEnum } from '../../../../enums/FightSpellCastCriticalEnum';
import { Weapon } from '../fight/Weapon';
import { Sequence } from '../sequence/Sequence';
import { HttpService } from '../../app/services/http.service';

export class ChatWeaponMessage extends ChatMessage {

    public isUnknow = false;
    public apCost: number | undefined;

    constructor(
        public weapon: number | Weapon,
        public target: Entity | undefined,
        public cellId: number,
        public critical: FightSpellCastCriticalEnum,
        author: Entity
    ) {
        super(author);
    }

    public load(sequence: Sequence) {
        if (sequence.isAPCost) {
            this.apCost = sequence.apCost;
            sequence.isAPCost = false;
        }
        sequence.countToLoad++;
        HttpService.instance.getItemById(+this.weapon)
            .subscribe(weapon => {
                this.weapon = new Weapon(weapon.id, weapon.name, weapon.image);
                sequence.countLoaded++;
                if (sequence.isFinish && sequence.countToLoad === sequence.countLoaded) {
                    sequence.addMessages();
                }
            });
    }
}

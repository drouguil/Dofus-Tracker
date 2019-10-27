import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { FightSpellCastCriticalEnum } from '../../../../enums/FightSpellCastCriticalEnum';
import { Spell } from '../fight/Spell';
import { HttpService } from '../../app/services/http.service';
import { Sequence } from '../sequence/Sequence';

export class ChatCastSpellMessage extends ChatMessage {

    public isUnknow = false;
    public apCost: number | undefined;

    constructor(
        public spell: number | Spell,
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
        HttpService.instance.getSpellById(+this.spell)
            .subscribe(spell => {
                this.spell = new Spell(spell.id, spell.name);
                sequence.countLoaded++;
                if (sequence.isFinish && sequence.countToLoad === sequence.countLoaded) {
                    sequence.addMessages();
                }
            });
    }
}

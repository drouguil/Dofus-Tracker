import { Entity } from '../fight/entity/Entity';
import { ChatMessage } from './ChatMessage';
import { Sequence } from '../sequence/Sequence';
import { HttpService } from '../../app/services/http.service';
import { Spell } from '../fight/Spell';
import { StateBoostBuff } from '../fight/buff/StateBoostBuff';

export class ChatStateBoostBuffMessage extends ChatMessage {

    constructor(
        public buff: StateBoostBuff,
        author: Entity
    ) {
        super(author);
    }

    public load(sequence: Sequence) {
        sequence.countToLoad++;
        HttpService.instance.getSpellById(+this.buff.spell)
            .subscribe(spell => {
                this.buff.spell = new Spell(spell.id, spell.name);
                sequence.countLoaded++;
                if (sequence.isFinish && sequence.countToLoad === sequence.countLoaded) {
                    sequence.addMessages();
                }
            });
    }
}

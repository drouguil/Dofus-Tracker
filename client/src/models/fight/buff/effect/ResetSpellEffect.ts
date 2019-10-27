import { Effect } from './Effect';
import { Spell } from '../../Spell';
import { HttpService } from '../../../../app/services/http.service';

export class ResetSpellEffect implements Effect {
    public spell: Spell | number;

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.spell = arg3;
        HttpService.instance.getSpellById(arg3)
            .subscribe(spell => {
                this.spell = new Spell(spell.id, spell.name);
            });
        console.log(this);
    }
}

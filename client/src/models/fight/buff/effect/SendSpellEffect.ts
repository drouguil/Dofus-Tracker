import { Effect } from './Effect';
import { Spell } from '../../Spell';
import { HttpService } from '../../../../app/services/http.service';

export class SendSpellEffect implements Effect {
    public spell: Spell | number;
    public spellLevel: number;

    constructor(public isAllTarget: boolean) { }

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.spell = arg1;
        this.spellLevel = arg2;
        HttpService.instance.getSpellById(arg1)
            .subscribe(spell => {
                this.spell = new Spell(spell.id, spell.name);
            });
        console.log(this);
    }
}

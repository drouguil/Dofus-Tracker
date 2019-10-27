import { BreedSpellEnum } from '../../../../enums/BreedSpellEnum';
import { Spell } from './Spell';

export class BreedSpell {
    constructor(
        public spell: Spell,
        public isChosen: BreedSpellEnum = BreedSpellEnum.UNKNOW
    ) { }
}

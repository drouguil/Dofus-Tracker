import { Effect } from './Effect';
import { SpellStateEnum } from '../../../../../../enums/SpellStateEnum';

export class SetStateEffect implements Effect {
    public state: SpellStateEnum;

    constructor(public isSet: boolean) { }

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.state = arg3;
        console.log(this);
    }
}

import { Effect } from './Effect';
import { ActionEnum } from '../../../../../../enums/ActionEnum';

export class HitEffect implements Effect {
    public hitMin: number;
    public hitMax: number;

    constructor(public action: ActionEnum) { }

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.hitMin = arg3 + 1;
        this.hitMax = arg3 + arg2;
        console.log(this);
    }
}

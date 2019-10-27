import { Effect } from './Effect';
import { ActionEnum } from '../../../../../../enums/ActionEnum';
import { BoostBuff } from '../BoostBuff';

export class BoostEffect implements Effect {
    public delta: number;
    public boost: BoostBuff;

    constructor(public action: ActionEnum) { }

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.delta = arg3;
        console.log(this);
    }
}

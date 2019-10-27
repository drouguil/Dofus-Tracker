import { Effect } from './Effect';

export class HealPercentEffect implements Effect {
    public percent: number;

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.percent = arg3;
        console.log(this);
    }
}

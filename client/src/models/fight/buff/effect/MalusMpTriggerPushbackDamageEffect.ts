import { Effect } from './Effect';

export class MalusMpTriggerPushbackDamageEffect implements Effect {
    public malus_mp: number;

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.malus_mp = arg3;
        console.log(this);
    }
}

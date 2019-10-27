import { Effect } from './Effect';
import { Stats } from '../../Stats';

export class DamageSufferedEffect implements Effect {
    public damageSuffered: number;
    public stats: Stats;

    public analyze(arg1: number, arg2: number, arg3: number): void {
        this.damageSuffered = arg1;
        this.stats = new Stats();
        this.stats.meleeResistancePercent = arg1 - 100;
        this.stats.rangedResistancePercent = arg1 - 100;
        console.log(this);
    }
}

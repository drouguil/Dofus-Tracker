import { Entity } from './Entity';
import { DirectionEnum } from '../../../../../enums/DirectionEnum';
import { Stats } from '../Stats';
import { Spell } from '../Spell';

export class MonsterEntity extends Entity {

    public spells: Spell[];

    constructor(
        public monsterId: number,
        public monsterGrade: number,
        level: number,
        stats: Stats,
        id: number,
        direction: DirectionEnum,
        cellId: number
    ) {
        super(id, direction, cellId);
        this.level = level;
        this.stats = stats;
        this.spells = new Array();
        this.setCell(cellId);
    }
}

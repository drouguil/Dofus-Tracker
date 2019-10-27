import { CellTypeEnum } from '../../../../enums/CellTypeEnum';
import { Entity } from './entity/Entity';

export class Cell {

    public entity: Entity | undefined;
    public x: number;
    public y: number;

    constructor(
        public id: number,
        public type: CellTypeEnum
    ) {
    }
}

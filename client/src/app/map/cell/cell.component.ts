import { Component, Input } from '@angular/core';
import { CellTypeEnum } from '../../../../../enums/CellTypeEnum';
import { Cell } from '../../../models/fight/Cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input() cell: Cell | undefined;

  constructor() { }

  public checkType(cellType: CellTypeEnum) {
    return this.cell && this.cell.type === cellType;
  }
}

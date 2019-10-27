import { Component, Input } from '@angular/core';
import { Cell } from '../../../../models/fight/Cell';

@Component({
  selector: 'app-cell-empty',
  templateUrl: './cell-empty.component.html',
  styleUrls: ['./cell-empty.component.scss']
})
export class CellEmptyComponent {

  @Input() cell: Cell | undefined;

  constructor() { }

  public onClick(): void {
    if (this.cell) {
      console.log(this.cell);
    }
  }

  public onRightClick(): void {
    if (this.cell) {
      console.log(this.cell);
    }
  }

}

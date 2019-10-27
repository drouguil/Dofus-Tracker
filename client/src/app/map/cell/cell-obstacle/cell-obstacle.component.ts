import { Component, Input } from '@angular/core';
import { Cell } from '../../../../models/fight/Cell';

@Component({
  selector: 'app-cell-obstacle',
  templateUrl: './cell-obstacle.component.html',
  styleUrls: ['./cell-obstacle.component.scss']
})
export class CellObstacleComponent {

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

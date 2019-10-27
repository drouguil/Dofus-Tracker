import { Component } from '@angular/core';
import { Cell } from '../../models/fight/Cell';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  public lines: number[];
  public columns: number[];
  public mapDisplayed: Cell[][];

  constructor(
    private mapService: MapService
  ) {
    this.lines = this.mapService.lines;
    this.columns = this.mapService.columns;
    this.mapDisplayed = this.mapService.mapDisplayed;
  }

  public getCell(line: number, column: number): Cell | undefined {
    let cell: Cell | undefined;
    if (this.mapDisplayed && this.mapDisplayed[line]) {
      cell = this.mapDisplayed[line][column];
    }
    return cell;
  }

  public getCellNumber(line: number, column: number): number {
    return this.mapService.getCellId(line, column);
  }
}

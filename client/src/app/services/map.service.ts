import { Injectable } from '@angular/core';
import { Cell } from '../../models/fight/Cell';
import { CellTypeEnum } from '../../../../enums/CellTypeEnum';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  static instance: MapService;
  public map: Cell[][];
  public lines: number[];
  public columns: number[];
  public mapDisplayed: Cell[][];
  public placementBlue: Cell[];
  public placementRed: Cell[];
  public movedCells: number[];
  public spellCells: number[];
  public placementDisplayed = false;
  public cellHover: Cell | undefined;

  constructor(private http: HttpClient) {
    MapService.instance = this;
    this.lines = Array(40).fill(0).map((x, i) => i);
    this.columns = Array(14).fill(0).map((x, i) => i);
    this.mapDisplayed = new Array(40);
    this.placementBlue = new Array();
    this.placementRed = new Array();
    this.movedCells = new Array();
    this.spellCells = new Array();
    this.map = new Array(33);

    for (let index = 0; index < this.map.length; index++) {
      this.map[index] = new Array(33);
    }

    this.getMap().subscribe(data => {
      for (let line = 0; line < 40; line++) {
        const columns = 14;

        for (let column = 0; column < columns; column++) {
          const id: number = this.getCellId(line, column);

          const cell: Cell = new Cell(id, data[id]);

          this.map[this.getCellX(line, column)][this.getCellY(line, column)] = cell;
        }
      }

      for (let index = 0; index < this.mapDisplayed.length; index++) {
        this.mapDisplayed[index] = new Array(14);
      }

      for (let line = 0; line < this.lines.length; line++) {
        for (let column = 0; column < this.columns.length; column++) {
          const x = this.getCellX(line, column);
          const y = this.getCellY(line, column);
          this.map[x][y].x = x;
          this.map[x][y].y = y;
          this.mapDisplayed[line][column] = this.map[x][y];
        }
      }
    });
  }

  public save(): void {

    const map: any = {};

    for (let x = 0; x < this.map.length; x++) {
      for (let y = 0; y < this.map[0].length; y++) {
        const cell: Cell = this.map[x][y];
        if (cell) {
          map[cell.id] = cell.type;
        }
      }
    }

    console.log(JSON.stringify(map));
  }

  public getMap(): Observable<any> {
    return this.http.get('../../assets/map/map_full.json');
  }

  public getCellId(line: number, column: number): number {
    return Math.floor(line / 2) * 28 + line % 2 * 14 + column;
  }

  public getCellById(id: number): Cell | undefined {
    return this.mapDisplayed[Math.trunc(id / 14)][id % 14];
  }

  public getCellX(line: number, column: number): number {
    return 13 - column + Math.floor(line / 2);
  }

  public getCellY(line: number, column: number): number {
    return Math.floor((line + 1) / 2) + column;
  }

  public updatePlacement(placementRed: number[], placementBlue: number[]): void {

    this.placementBlue.splice(0, this.placementBlue.length);
    this.placementRed.splice(0, this.placementRed.length);

    placementRed.forEach(cellId => {
      const cell: Cell | undefined = this.getCellById(cellId);
      if (cell) {
        this.placementRed.push(cell);
      }
    });

    placementBlue.forEach(cellId => {
      const cell: Cell | undefined = this.getCellById(cellId);
      if (cell) {
        this.placementBlue.push(cell);
      }
    });

  }

  public clearSpellCells(): void {
    this.spellCells.splice(0, this.spellCells.length);
  }

  public clearMovedCells(): void {
    this.movedCells.splice(0, this.movedCells.length);
  }

  public endFight(): void {
    this.placementBlue.splice(0, this.placementBlue.length);
    this.placementRed.splice(0, this.placementRed.length);
    this.clearMovedCells();
    this.clearSpellCells();

    for (let line = 0; line < this.lines.length; line++) {
      for (let column = 0; column < this.columns.length; column++) {
        this.mapDisplayed[line][column].entity = undefined;
      }
    }
  }

  public isLdv(x0: number, y0: number, x1: number, y1: number): boolean {

    let clear = true;
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let x = x0;
    let y = y0;
    let n = -1 + dx + dy;
    const x_inc = (x1 > x0 ? 1 : -1);
    const y_inc = (y1 > y0 ? 1 : -1);
    let error = dx - dy;
    dx *= 2;
    dy *= 2;

    for (let i = 0; i < 1; i++) {

      if (error > 0) {
        x += x_inc;
        error -= dy;
      } else if (error < 0) {
        y += y_inc;
        error += dx;
      } else {
        x += x_inc;
        error -= dy;
        y += y_inc;
        error += dx;
        n--;
      }
    }

    while (n > 0 && clear) {

      const cell: Cell = this.map[x][y];

      if (cell.type === CellTypeEnum.OBSTACLE || cell.entity) {
        clear = false;
      } else {

        if (error > 0) {
          x += x_inc;
          error -= dy;
        } else if (error < 0) {
          y += y_inc;
          error += dx;
        } else {
          x += x_inc;
          error -= dy;
          y += y_inc;
          error += dx;
          n--;
        }

        n--;
      }
    }

    return clear;
  }
}

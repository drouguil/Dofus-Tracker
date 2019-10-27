import { Component, Input } from '@angular/core';
import { Cell } from '../../../../models/fight/Cell';
import { TeamFightEnum } from '../../../../../../enums/TeamFightEnum';
import { BreedEntity } from '../../../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../../../models/fight/entity/MonsterEntity';
import { MapService } from '../../../../app/services/map.service';
import { DetailsService } from '../../../../app/services/details.service';

@Component({
  selector: 'app-cell-available',
  templateUrl: './cell-available.component.html',
  styleUrls: ['./cell-available.component.scss']
})
export class CellAvailableComponent {

  @Input() cell: Cell | undefined;

  public placementBlue: Cell[];
  public placementRed: Cell[];

  constructor(private mapService: MapService, private detailsService: DetailsService) {
    this.placementBlue = this.mapService.placementBlue;
    this.placementRed = this.mapService.placementRed;
  }

  public onClick(): void {
    if (this.cell && this.cell.entity) {
      this.detailsService.openDialog(this.cell.entity);
    }
  }

  public onRightClick(): void {
    if (this.cell) {
      console.log(this.cell);
    }
  }

  public isEntity(): boolean {
    let isEntity = false;
    if (this.cell && this.cell.entity) {
      isEntity = true;
    }
    return isEntity;
  }

  public isMonster(): boolean {
    let result = false;
    if (this.cell && this.cell.entity && this.cell.entity instanceof MonsterEntity) {
      result = true;
    }
    return result;
  }

  public getEntityTeam(): string {
    let team = '';
    if (this.cell && this.cell.entity) {
      team = TeamFightEnum[this.cell.entity.team].toString().toLowerCase();
    }
    return team;
  }

  public getEntityImage(): string {

    let src = '../../../assets/img/';

    if (this.cell && this.cell.entity) {
      if (this.cell.entity instanceof BreedEntity) {
        src += 'breeds/idle/' + this.cell.entity.breed + '' + this.cell.entity.sex + '_' + this.cell.entity.direction + '.png';
      } else if (this.cell.entity instanceof MonsterEntity) {
        src += 'monsters/' + this.cell.entity.monsterId + '.png';
      } else {
        src += 'breeds/idle/10_2.png';
      }
    }

    return src;
  }

  public onHover(): void {
    if (this.cell) {
      this.mapService.cellHover = this.cell;
      if (this.cell.entity) {
        this.cell.entity.isHover = true;
      }
    }
  }

  public onLeave(): void {
    this.mapService.cellHover = undefined;
    if (this.cell && this.cell.entity) {
      this.cell.entity.isHover = false;
    }
  }

  public isPlacement(team: TeamFightEnum): boolean {

    let result = false;

    if (this.mapService.placementDisplayed && this.cell) {
      let cells: Cell[];

      if (team === TeamFightEnum.BLUE) {
        cells = this.placementBlue;
      } else {
        cells = this.placementRed;
      }

      const cell2: Cell | undefined = cells.find((cellPlacement: Cell) => {
        let isSame = false;
        if (this.cell && this.cell.id === cellPlacement.id) {
          isSame = true;
        }
        return isSame;
      });

      if (cell2) {
        result = true;
      }
    }

    return result;
  }

  public getMovedCellNumber(): number {

    let result = -1;

    const movedCells: number[] = this.mapService.movedCells;

    if (movedCells && movedCells.length > 0 && this.cell) {
      result = movedCells.indexOf(this.cell.id);
    }

    return result;
  }

  public isMoved(): boolean {

    let result = false;

    const movedCells: number[] = this.mapService.movedCells;

    if (movedCells && movedCells.length > 0 && this.cell) {
      result = movedCells.indexOf(this.cell.id) !== -1;
    }

    return result;
  }

  public isSpell(): boolean {

    let result = false;

    const spellCells: number[] = this.mapService.spellCells;

    if (spellCells && spellCells.length > 0 && this.cell) {
      result = spellCells.indexOf(this.cell.id) !== -1;
    }

    return result;
  }

  public isShadow(): boolean {

    let result = false;

    if (this.mapService.cellHover && this.cell) {
      result = !this.mapService.isLdv(this.mapService.cellHover.x, this.mapService.cellHover.y, this.cell.x, this.cell.y);
    }

    return result;
  }

  public isEntityHover(): boolean {

    let result = false;

    if (this.cell && this.cell.entity && this.cell.entity.isHover) {
      result = true;
    }

    return result;
  }

}

import { Injectable } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Entity } from '../../models/fight/entity/Entity';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  static instance: DetailsService;

  private dialogRef: MatDialogRef<DetailsComponent>;

  constructor(public dialog: MatDialog) {
    DetailsService.instance = this;
  }

  openDialog(entity: Entity): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(DetailsComponent, {
      data: entity
    });
  }
}

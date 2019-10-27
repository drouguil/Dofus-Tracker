import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfigComponent } from '../config/config.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  static instance: ConfigService;

  public isStreaming = false;

  constructor(public dialog: MatDialog) {
    ConfigService.instance = this;
  }

  openConfig(): void {
    const dialogRef = this.dialog.open(ConfigComponent);
  }
}

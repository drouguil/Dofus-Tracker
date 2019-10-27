import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  constructor(public dialogRef: MatDialogRef<ConfigComponent>) { }

  public close(): void {
    this.dialogRef.close();
  }

}

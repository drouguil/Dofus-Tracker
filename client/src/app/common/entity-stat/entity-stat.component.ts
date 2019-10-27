import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../models/fight/entity/Entity';

@Component({
  selector: 'app-entity-stat',
  templateUrl: './entity-stat.component.html',
  styleUrls: ['./entity-stat.component.scss']
})
export class EntityStatComponent implements OnInit {

  public statName: string;

  @Input() entity: Entity;
  @Input() stat: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.stat) {
      this.statName = '';
      const array: string[] = this.stat.split('_');

      for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (index > 0) {
          const firstLetter = element.charAt(0).toUpperCase();
          const allString = element.substring(1);
          element = firstLetter + allString;
        }
        this.statName += element;
      }
    }
  }

  getStatValue(): number {
    let statValue = 0;
    if (this.statName) {
      statValue = this.entity.getStats()[this.statName];
    }
    return statValue;
  }

}

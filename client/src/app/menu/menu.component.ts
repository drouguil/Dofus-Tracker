import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { FightService } from '../services/fight.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private mapService: MapService, private fightService: FightService, private configService: ConfigService) {
  }

  public displayPlacement(): void {
    this.mapService.placementDisplayed = !this.mapService.placementDisplayed;
  }

  public endFight(): void {
    this.fightService.endFight();
  }

  public openConfig(): void {
    this.configService.openConfig();
  }

}

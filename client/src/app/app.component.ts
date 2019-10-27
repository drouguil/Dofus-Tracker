import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { FightService } from './services/fight.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(
        private loginService: LoginService,
        private fightService: FightService) {
    }

    public isConnected(): boolean {
        return this.loginService.isConnected;
    }
}

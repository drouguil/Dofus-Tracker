import { PacketProtocol } from '../PacketProtocol';
import { GameFightMinimalStatsProtocol } from './GameFightMinimalStatsProtocol';

export class GameFightMinimalStatsPreparationProtocol extends PacketProtocol {

    constructor() {
        super(360);
    }

    public stats: GameFightMinimalStatsProtocol;
    public initiative: number;

    public parse(packetProtocol: any): void {
        this.stats = packetProtocol.stats;
        this.initiative = packetProtocol.initiative;
    }

    public analyze(): void {
        if (this.stats) {
            const gameFightMinimalStatsProtocol: GameFightMinimalStatsProtocol = new GameFightMinimalStatsProtocol();
            gameFightMinimalStatsProtocol.parse(this.stats);
            gameFightMinimalStatsProtocol.analyze();
            this.stats = gameFightMinimalStatsProtocol;
        }
        // console.log(this);
    }
}

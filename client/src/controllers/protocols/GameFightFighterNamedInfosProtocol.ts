import { PacketProtocol } from '../PacketProtocol';
import { GameFightFighterInfosProtocol } from './GameFightFighterInfosProtocol';
import { PlayerStatusProtocol } from './PlayerStatusProtocol';

export class GameFightFighterNamedInfosProtocol extends PacketProtocol {

    constructor() {
        super(158);
    }

    public gameFightFighterInfosProtocol: GameFightFighterInfosProtocol;
    public name: string;
    public status: PlayerStatusProtocol;
    public leagueId: number;
    public ladderPosition: number;
    public hiddenInPrefight: boolean;

    public parse(packetProtocol: any): void {
        this.gameFightFighterInfosProtocol = packetProtocol.gameFightFighterInfosProtocol;
        this.name = packetProtocol.name;
        this.status = packetProtocol.status;
        this.leagueId = packetProtocol.leagueId;
        this.ladderPosition = packetProtocol.ladderPosition;
        this.hiddenInPrefight = packetProtocol.hiddenInPrefight;
    }

    public analyze(): void {
        if (this.gameFightFighterInfosProtocol) {
            const gameFightFighterInfosProtocol = new GameFightFighterInfosProtocol();
            gameFightFighterInfosProtocol.parse(this.gameFightFighterInfosProtocol);
            gameFightFighterInfosProtocol.analyze();
            this.gameFightFighterInfosProtocol = gameFightFighterInfosProtocol;
        }
        if (this.status) {
            const playerStatusProtocol = new PlayerStatusProtocol();
            playerStatusProtocol.parse(this.status);
            playerStatusProtocol.analyze();
            this.status = playerStatusProtocol;
        }
        // console.log(this);
    }
}

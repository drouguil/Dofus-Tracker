import { PacketProtocol } from '../PacketProtocol';
import { GameContextActorInfosProtocol } from './GameContextActorInfosProtocol';
import { GameFightFighterInfosProtocol } from './GameFightFighterInfosProtocol';

export class GameFightAIInfosProtocol extends PacketProtocol {

    constructor() {
        super(151);
    }

    public gameContextActorInfos: GameContextActorInfosProtocol;
    public gameFightFighterInfosProtocol: GameFightFighterInfosProtocol;

    public parse(packetProtocol: any): void {
        this.gameContextActorInfos = packetProtocol.gameContextActorInfos;
        this.gameFightFighterInfosProtocol = packetProtocol.fighter;
    }

    public analyze(): void {
        const gameContextActorInfos = new GameContextActorInfosProtocol();
        gameContextActorInfos.parse(this.gameContextActorInfos);
        gameContextActorInfos.analyze();
        this.gameContextActorInfos = gameContextActorInfos;

        const gameFightFighterInfosProtocol = new GameFightFighterInfosProtocol();
        gameFightFighterInfosProtocol.parse(this.gameFightFighterInfosProtocol);
        gameFightFighterInfosProtocol.analyze();
        this.gameFightFighterInfosProtocol = gameFightFighterInfosProtocol;
    }
}

import { PacketProtocol } from '../PacketProtocol';
import { GameFightAIInfosProtocol } from './GameFightAIInfosProtocol';
import { MonsterEntity } from '../../models/fight/entity/MonsterEntity';
import { FightService } from '../../app/services/fight.service';
import { Entity } from '../../models/fight/entity/Entity';
import { Stats } from '../../models/fight/Stats';
import { GameFightMinimalStatsPreparationProtocol } from './GameFightMinimalStatsPreparationProtocol';
import { GameFightMinimalStatsProtocol } from './GameFightMinimalStatsProtocol';
import { TimelineService } from '../../app/services/timeline.service';
import { HttpService } from '../../app/services/http.service';
import { DirectionEnum } from '../../../../enums/DirectionEnum';
import { FightEntityDispositionInfosProtocol } from './FightEntityDispositionInfosProtocol';
import { EntityDispositionInfosProtocol } from './EntityDispositionInfosProtocol';

export class GameFightMonsterInfosProtocol extends PacketProtocol {

    constructor() {
        super(29);
    }

    public creature: GameFightAIInfosProtocol;
    public creatureId: number;
    public creatureGrade: number;
    public level: number;

    public parse(packetProtocol: any): void {
        this.creature = packetProtocol.creature;
        this.creatureId = packetProtocol.creatureId;
        this.creatureGrade = packetProtocol.creatureGrade;
        this.level = packetProtocol.level;
    }

    public analyze(): void {

        const gameFightAIInfosProtocol: GameFightAIInfosProtocol = new GameFightAIInfosProtocol();
        gameFightAIInfosProtocol.parse(this.creature);
        gameFightAIInfosProtocol.analyze();
        this.creature = gameFightAIInfosProtocol;

        const stats: Stats = Stats.initStats();
        switch (this.creature.gameFightFighterInfosProtocol.stats.protocolId) {
            case 31:
                // tslint:disable-next-line:max-line-length
                stats.parseStats(this.creature.gameFightFighterInfosProtocol.stats as GameFightMinimalStatsProtocol);
                break;
            case 360:
                // tslint:disable-next-line:max-line-length
                stats.parse(this.creature.gameFightFighterInfosProtocol.stats as GameFightMinimalStatsPreparationProtocol);
                break;
            default:
                console.error(this.creature.gameFightFighterInfosProtocol.stats.protocolId);
                break;
        }

        let direction: DirectionEnum = DirectionEnum.UNKNOW;
        let cellId = -1;

        switch (this.creature.gameContextActorInfos.disposition.protocolId) {
            case 60:
                // tslint:disable-next-line:max-line-length
                const disposition: EntityDispositionInfosProtocol = this.creature.gameContextActorInfos.disposition as EntityDispositionInfosProtocol;
                direction = disposition.direction;
                cellId = disposition.cellId;
                break;
            case 217:
                // tslint:disable-next-line:max-line-length
                const fightDisposition: FightEntityDispositionInfosProtocol = this.creature.gameContextActorInfos.disposition as FightEntityDispositionInfosProtocol;
                direction = fightDisposition.entityDispositionInfosProtocol.direction;
                cellId = fightDisposition.entityDispositionInfosProtocol.cellId;
                break;
            default:
                console.error(this.creature.gameContextActorInfos.disposition.protocolId);
                break;
        }

        // tslint:disable-next-line:max-line-length
        const monsterEntity = new MonsterEntity(this.creatureId, this.creatureGrade, this.level, stats, this.creature.gameContextActorInfos.contextualId, direction, cellId);
        monsterEntity.team = this.creature.gameFightFighterInfosProtocol.team;
        monsterEntity.summoned = stats.summoned;
        monsterEntity.summoner = stats.summoner;
        if (monsterEntity.summoner) {
            monsterEntity.summoner.summons.push(monsterEntity);
        }
        FightService.instance.setEntity(monsterEntity);
        HttpService.instance.getMonsterById(this.creatureId)
            .subscribe(monster => {
                monsterEntity.name = monster.name;
                console.log(monster);
            });
        // console.log(this);
    }
}

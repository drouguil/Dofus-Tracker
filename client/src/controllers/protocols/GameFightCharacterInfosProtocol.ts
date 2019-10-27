import { PacketProtocol } from '../PacketProtocol';
import { BreedEnum } from '../../../../enums/BreedEnum';
import { GameContextActorInfosProtocol } from './GameContextActorInfosProtocol';
import { ActorAlignmentInfosProtocol } from './ActorAlignmentInfosProtocol';
import { GameFightFighterNamedInfosProtocol } from './GameFightFighterNamedInfosProtocol';
import { FightService } from '../../app/services/fight.service';
import { OverlayService } from '../../app/services/overlay.service';
import { BreedEntity } from '../../models/fight/entity/BreedEntity';
import { Stats } from '../../models/fight/Stats';
import { GameFightMinimalStatsPreparationProtocol } from './GameFightMinimalStatsPreparationProtocol';
import { GameFightMinimalStatsProtocol } from './GameFightMinimalStatsProtocol';
import { DirectionEnum } from '../../../../enums/DirectionEnum';
import { FightEntityDispositionInfosProtocol } from './FightEntityDispositionInfosProtocol';
import { EntityDispositionInfosProtocol } from './EntityDispositionInfosProtocol';
import { HttpService } from '../../app/services/http.service';
import { BreedSpells } from '../../models/fight/BreedSpells';
import { BreedSpell } from '../../models/fight/BreedSpell';
import { Spell } from '../../models/fight/Spell';

export class GameFightCharacterInfosProtocol extends PacketProtocol {

    constructor() {
        super(46);
    }

    public gameContextActorInfos: GameContextActorInfosProtocol;
    public fighter: GameFightFighterNamedInfosProtocol;
    public level: number;
    public alignmentInfos: ActorAlignmentInfosProtocol;
    public breed: BreedEnum;
    public sex: boolean;

    public parse(packetProtocol: any): void {
        this.gameContextActorInfos = packetProtocol.gameContextActorInfos;
        this.fighter = packetProtocol.fighter;
        this.level = packetProtocol.level;
        this.alignmentInfos = packetProtocol.alignmentInfos;
        this.breed = packetProtocol.breed;
        this.sex = packetProtocol.sex;
    }

    public analyze(): void {
        const gameContextActorInfosProtocol: GameContextActorInfosProtocol = new GameContextActorInfosProtocol();
        gameContextActorInfosProtocol.parse(this.gameContextActorInfos);
        gameContextActorInfosProtocol.analyze();
        this.gameContextActorInfos = gameContextActorInfosProtocol;

        const gameFightFighterNamedInfosProtocol: GameFightFighterNamedInfosProtocol = new GameFightFighterNamedInfosProtocol();
        gameFightFighterNamedInfosProtocol.parse(this.fighter);
        gameFightFighterNamedInfosProtocol.analyze();
        this.fighter = gameFightFighterNamedInfosProtocol;

        const actorAlignmentInfosProtocol: ActorAlignmentInfosProtocol = new ActorAlignmentInfosProtocol();
        actorAlignmentInfosProtocol.parse(this.alignmentInfos);
        actorAlignmentInfosProtocol.analyze();
        this.alignmentInfos = actorAlignmentInfosProtocol;

        const stats = Stats.initStats();
        switch (this.fighter.gameFightFighterInfosProtocol.stats.protocolId) {
            case 31:
                // tslint:disable-next-line:max-line-length
                stats.parseStats(this.fighter.gameFightFighterInfosProtocol.stats as GameFightMinimalStatsProtocol);
                break;
            case 360:
                // tslint:disable-next-line:max-line-length
                stats.parse(this.fighter.gameFightFighterInfosProtocol.stats as GameFightMinimalStatsPreparationProtocol);
                break;
            default:
                console.error(this.fighter.gameFightFighterInfosProtocol.stats.protocolId);
                break;
        }

        let sex = 0;
        if (this.sex) {
            sex = 1;
        }

        let direction: DirectionEnum = DirectionEnum.UNKNOW;
        let cellId = -1;

        switch (this.gameContextActorInfos.disposition.protocolId) {
            case 60:
                // tslint:disable-next-line:max-line-length
                const disposition: EntityDispositionInfosProtocol = this.gameContextActorInfos.disposition as EntityDispositionInfosProtocol;
                direction = disposition.direction;
                cellId = disposition.cellId;
                break;
            case 217:
                // tslint:disable-next-line:max-line-length
                const fightDisposition: FightEntityDispositionInfosProtocol = this.gameContextActorInfos.disposition as FightEntityDispositionInfosProtocol;
                direction = fightDisposition.entityDispositionInfosProtocol.direction;
                cellId = fightDisposition.entityDispositionInfosProtocol.cellId;
                break;
            default:
                console.error(this.gameContextActorInfos.disposition.protocolId);
                break;
        }

        // tslint:disable-next-line:max-line-length
        const breedEntity = new BreedEntity(this.breed, sex, this.level, stats, this.gameContextActorInfos.contextualId, direction, cellId);
        breedEntity.name = this.fighter.name;
        breedEntity.team = this.fighter.gameFightFighterInfosProtocol.team;
        breedEntity.isAlive = this.fighter.gameFightFighterInfosProtocol.alive;
        FightService.instance.setEntity(breedEntity);
        OverlayService.instance.addEntity(breedEntity);
        HttpService.instance.getSpellsCouplesByBreed(this.breed).subscribe(spells => {
            spells.forEach(element => {
                // tslint:disable-next-line:max-line-length
                breedEntity.breedSpells.push(new BreedSpells(new BreedSpell(new Spell(element.spell.id, element.spell.name)), new BreedSpell(new Spell(element.variant.id, element.variant.name))));
            });
        });
        HttpService.instance.getCommonsSpells().subscribe(spells => {
            spells.forEach(spell => {
                breedEntity.commonSpells.push(new BreedSpell(new Spell(spell.id, spell.name)));
            });
        });
        // console.log(this);
    }
}

import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatSlideMessage } from '../../models/chat/ChatSlideMessage';
import { GameContextActorInfosProtocol } from '../protocols/GameContextActorInfosProtocol';
import { DirectionEnum } from '../../../../enums/DirectionEnum';
import { EntityDispositionInfosProtocol } from '../protocols/EntityDispositionInfosProtocol';
import { FightEntityDispositionInfosProtocol } from '../protocols/FightEntityDispositionInfosProtocol';

export class GameFightRefreshFighterMessage extends PacketMessage {

    public infos: GameContextActorInfosProtocol;

    public parse(packetMessage: any): void {
        this.infos = packetMessage.infos;
    }

    public analyze(): void {
        const infos = new GameContextActorInfosProtocol();
        infos.parse(this.infos);
        infos.analyze();
        this.infos = infos;

        let direction: DirectionEnum = DirectionEnum.UNKNOW;
        let cellId = -1;

        switch (this.infos.disposition.protocolId) {
            case 60:
                // tslint:disable-next-line:max-line-length
                const disposition: EntityDispositionInfosProtocol = this.infos.disposition as EntityDispositionInfosProtocol;
                direction = disposition.direction;
                cellId = disposition.cellId;
                break;
            case 217:
                // tslint:disable-next-line:max-line-length
                const fightDisposition: FightEntityDispositionInfosProtocol = this.infos.disposition as FightEntityDispositionInfosProtocol;
                direction = fightDisposition.entityDispositionInfosProtocol.direction;
                cellId = fightDisposition.entityDispositionInfosProtocol.cellId;
                break;
            default:
                console.error(this.infos.disposition.protocolId);
                break;
        }

        const entity: Entity | undefined = FightService.instance.getEntityById(this.infos.contextualId);

        if (entity) {
            entity.direction = direction;
            entity.setCell(cellId);
        } else {
            console.error(this.infos.contextualId);
        }
    }
}

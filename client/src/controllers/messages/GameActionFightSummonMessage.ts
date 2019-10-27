import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatSlideMessage } from '../../models/chat/ChatSlideMessage';
import { PacketProtocol } from '../PacketProtocol';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { protocolManager } from '../../helpers/ProtocolManager';

export class GameActionFightSummonMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public fighters: PacketProtocol[];

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.fighters = packetMessage.fighters;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        switch (this.abstractGameAction.actionId) {
            case ActionEnum.SUMMON_CREATURE:
                break;
            default:
                console.error(this.abstractGameAction.actionId);
                break;
        }

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);

        this.fighters.forEach((protocol: PacketProtocol) => {
            protocolManager.analyze(protocol.protocolId, protocol);
        });

        console.log(this);
    }
}

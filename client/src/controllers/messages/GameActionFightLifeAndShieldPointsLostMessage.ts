import { PacketMessage } from '../PacketMessage';
import { GameActionFightLifePointsLostMessage } from './GameActionFightLifePointsLostMessage';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { FightService } from '../../app/services/fight.service';
import { Entity } from '../../models/fight/entity/Entity';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatHitMessage } from '../../models/chat/ChatHitMessage';

export class GameActionFightLifeAndShieldPointsLostMessage extends PacketMessage {

    public lifePointsLost: GameActionFightLifePointsLostMessage;
    public shieldLoss: number;

    public parse(packetMessage: any): void {
        this.lifePointsLost = packetMessage.lifePointsLost;
        this.shieldLoss = packetMessage.shieldLoss;
    }

    public analyze(): void {

        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.lifePointsLost.abstractGameAction);
        gameAction.analyze();
        this.lifePointsLost.abstractGameAction = gameAction;

        const target: Entity | undefined = FightService.instance.getEntityById(this.lifePointsLost.targetId);
        const author: Entity | undefined = FightService.instance.getEntityById(this.lifePointsLost.abstractGameAction.sourceId);

        if (author) {
            if (target) {
                // tslint:disable-next-line:max-line-length
                target.looseLifePoints(this.lifePointsLost.abstractGameAction.actionId, this.lifePointsLost.loss, this.lifePointsLost.permanentDamages);
                // tslint:disable-next-line:max-line-length
                SequenceService.instance.addMessage(author, new ChatHitMessage(target, this.lifePointsLost.loss, this.lifePointsLost.permanentDamages, this.lifePointsLost.elementId, this.lifePointsLost.abstractGameAction.actionId, author, this.shieldLoss));
            } else {
                console.error(this.lifePointsLost.targetId);
            }
        } else {
            console.error(this.lifePointsLost.abstractGameAction.sourceId);
        }
    }
}

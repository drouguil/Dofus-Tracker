import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { ChatHitMessage } from '../../models/chat/ChatHitMessage';
import { ElementEnum } from '../../../../enums/ElementEnum';
import { SequenceService } from '../../app/services/sequence.service';

export class GameActionFightLifePointsLostMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public loss: number;
    public permanentDamages: number;
    public elementId: ElementEnum;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.loss = packetMessage.loss;
        this.permanentDamages = packetMessage.permanentDamages;
        this.elementId = packetMessage.elementId;
    }

    public analyze(): void {

        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const target: Entity | undefined = FightService.instance.getEntityById(this.targetId);
        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);

        if (author) {
            if (target) {
                target.looseLifePoints(this.abstractGameAction.actionId, this.loss, this.permanentDamages);
                // tslint:disable-next-line:max-line-length
                SequenceService.instance.addMessage(author, new ChatHitMessage(target, this.loss, this.permanentDamages, this.elementId, this.abstractGameAction.actionId, author));
            } else {
                console.error(this.targetId);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
    }
}

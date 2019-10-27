import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';

export class GameActionFightDispellMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public verboseCast: boolean;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.verboseCast = packetMessage.verboseCast;
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
                target.dispell(this.abstractGameAction.actionId);
            } else {
                console.error(this.targetId);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
        console.log(this);
    }
}

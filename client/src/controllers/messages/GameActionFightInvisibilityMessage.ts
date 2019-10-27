import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { GameActionFightInvisibilityStateEnum } from '../../../../enums/GameActionFightInvisibilityStateEnum';

export class GameActionFightInvisibilityMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public state: GameActionFightInvisibilityStateEnum;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.targetId = packetMessage.targetId;
        this.state = packetMessage.state;
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
                target.invisibility(this.abstractGameAction.actionId, this.state);
            } else {
                console.error(this.targetId);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
        console.log(this);
    }
}

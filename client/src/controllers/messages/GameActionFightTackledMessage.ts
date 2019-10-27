import { PacketMessage } from '../PacketMessage';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { FightService } from '../../app/services/fight.service';
import { Entity } from '../../models/fight/entity/Entity';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatTackleMessage } from '../../models/chat/ChatTackleMessage';

export class GameActionFightTackledMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public tacklersIds: number[];

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.tacklersIds = packetMessage.tacklersIds;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const tacklers: Entity[] = new Array();

        this.tacklersIds.forEach((id: number) => {
            const tackler: Entity | undefined = FightService.instance.getEntityById(id);
            if (tackler) {
                tacklers.push(tackler);
            } else {
                console.error(id);
            }
        });

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);
        if (author) {
            if (tacklers.length > 0) {
                SequenceService.instance.addMessage(author, new ChatTackleMessage(tacklers, author));
            } else {
                console.error(this.tacklersIds);
            }
        } else {
            console.error(this.abstractGameAction.sourceId);
        }
    }
}

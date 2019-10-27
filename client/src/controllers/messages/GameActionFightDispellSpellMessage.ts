import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { GameActionFightDispellMessage } from './GameActionFightDispellMessage';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';

export class GameActionFightDispellSpellMessage extends PacketMessage {

    public fightDispell: GameActionFightDispellMessage;
    public spellId: number;

    public parse(packetMessage: any): void {
        this.fightDispell = packetMessage.fightDispell;
        this.spellId = packetMessage.spellId;
    }

    public analyze(): void {

        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.fightDispell.abstractGameAction);
        gameAction.analyze();
        this.fightDispell.abstractGameAction = gameAction;

        const target: Entity | undefined = FightService.instance.getEntityById(this.fightDispell.targetId);
        const author: Entity | undefined = FightService.instance.getEntityById(this.fightDispell.abstractGameAction.sourceId);

        if (author) {
            if (target) {
                target.dispellSpell(this.fightDispell.abstractGameAction.actionId, this.spellId);
            } else {
                console.error(this.fightDispell.targetId);
            }
        } else {
            console.error(this.fightDispell.abstractGameAction.sourceId);
        }
        console.log(this);
    }
}

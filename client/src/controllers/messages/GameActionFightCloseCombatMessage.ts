import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionFightTargetedAbilityMessage } from './AbstractGameActionFightTargetedAbilityMessage';
import { ChatWeaponMessage } from '../../models/chat/ChatWeaponMessage';
import { SequenceService } from '../../app/services/sequence.service';

export class GameActionFightCloseCombatMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionFightTargetedAbilityMessage;
    public weaponId: number;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.weaponId = packetMessage.weaponId;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionFightTargetedAbilityMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        if (this.weaponId === 0) {
            this.weaponId = 1;
        }

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.gameAction.sourceId);
        const target: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.targetId);

        if (author) {
            // tslint:disable-next-line:max-line-length
            SequenceService.instance.addMessage(author, new ChatWeaponMessage(this.weaponId, target, this.abstractGameAction.destinationCellId, this.abstractGameAction.critical, author));
        } else {
            console.error(this.abstractGameAction.gameAction.sourceId);
        }
    }
}

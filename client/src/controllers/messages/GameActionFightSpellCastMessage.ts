import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionFightTargetedAbilityMessage } from './AbstractGameActionFightTargetedAbilityMessage';
import { ChatCastSpellMessage } from '../../models/chat/ChatCastSpellMessage';
import { SequenceService } from '../../app/services/sequence.service';
import { BreedEntity } from '../../models/fight/entity/BreedEntity';
import { ActionEnum } from '../../../../enums/ActionEnum';

export class GameActionFightSpellCastMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionFightTargetedAbilityMessage;
    public spellId: number;
    public spellLevel: number;
    public portalsId: number[];

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.spellId = packetMessage.spellId;
        this.spellLevel = packetMessage.spellLevel;
        this.portalsId = packetMessage.portalsId;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionFightTargetedAbilityMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.gameAction.sourceId);
        const target: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.targetId);

        switch (this.abstractGameAction.gameAction.actionId) {
            case ActionEnum.FIGHT_CAST_SPELL:
                break;
            default:
                console.error(this.abstractGameAction.gameAction.actionId);
                break;
        }

        if (author) {

            if (author instanceof BreedEntity) {
                author.analyzeSpell(this.spellId);
            }
            console.log(author);

            // tslint:disable-next-line:max-line-length
            SequenceService.instance.addMessage(author, new ChatCastSpellMessage(this.spellId, target, this.abstractGameAction.destinationCellId, this.abstractGameAction.critical, author));
        }
    }
}

import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';
import { PacketProtocol } from '../PacketProtocol';
import { protocolManager } from '../../helpers/ProtocolManager';
import { AbstractFightDispellableEffectProtocol } from '../protocols/AbstractFightDispellableEffectProtocol';
import { Buff } from '../../models/fight/buff/Buff';
import { FightTemporarySpellBoostEffectProtocol } from '../protocols/FightTemporarySpellBoostEffectProtocol';
import { FightTemporaryBoostStateEffectProtocol } from '../protocols/FightTemporaryBoostStateEffectProtocol';
import { SpellBoostBuff } from '../../models/fight/buff/SpellBoostBuff';
import { BoostBuff } from '../../models/fight/buff/BoostBuff';
import { FightTemporaryBoostEffectProtocol } from '../protocols/FightTemporaryBoostEffectProtocol';
import { StateBoostBuff } from '../../models/fight/buff/StateBoostBuff';
import { FightTriggeredEffectProtocol } from '../protocols/FightTriggeredEffectProtocol';
import { TriggeredBuff } from '../../models/fight/buff/TriggeredBuff';
import { SequenceService } from '../../app/services/sequence.service';
import { ChatMessage } from '../../models/chat/ChatMessage';
import { ChatBoostBuffMessage } from '../../models/chat/ChatBoostBuffMessage';
import { ChatSpellBoostBuffMessage } from '../../models/chat/ChatSpellBoostBuffMessage';
import { ChatBuffMessage } from '../../models/chat/ChatBuffMessage';
import { ChatStateBoostBuffMessage } from '../../models/chat/ChatStateBoostBuffMessage';
import { ChatTriggeredBuffMessage } from '../../models/chat/ChatTriggeredBuffMessage';

export class GameActionFightDispellableEffectMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public fightDispellableEffect: PacketProtocol;

    public parse(packetMessage: any): void {
        this.abstractGameAction = packetMessage.abstractGameAction;
        this.fightDispellableEffect = packetMessage.fightDispellableEffect;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.abstractGameAction);
        gameAction.analyze();
        this.abstractGameAction = gameAction;

        this.fightDispellableEffect = protocolManager.analyze(this.fightDispellableEffect.protocolId, this.fightDispellableEffect);

        const author: Entity | undefined = FightService.instance.getEntityById(this.abstractGameAction.sourceId);

        if (author) {
            let message = new ChatMessage(author);
            switch (this.fightDispellableEffect.protocolId) {
                case 206:
                    const buffEffect = new Buff();
                    buffEffect.action = this.abstractGameAction.actionId;
                    buffEffect.author = author;
                    buffEffect.parseEffect(this.fightDispellableEffect as AbstractFightDispellableEffectProtocol);
                    message = new ChatBuffMessage(buffEffect, author);
                    break;
                case 207:
                    const spellBoostBuff = new SpellBoostBuff();
                    spellBoostBuff.action = this.abstractGameAction.actionId;
                    spellBoostBuff.author = author;
                    spellBoostBuff.parseSpellBoostEffect(this.fightDispellableEffect as FightTemporarySpellBoostEffectProtocol);
                    message = new ChatSpellBoostBuffMessage(spellBoostBuff, author);
                    break;
                case 209:
                    const boostBuff = new BoostBuff();
                    boostBuff.action = this.abstractGameAction.actionId;
                    boostBuff.author = author;
                    boostBuff.parseBoostEffect(this.fightDispellableEffect as FightTemporaryBoostEffectProtocol);
                    message = new ChatBoostBuffMessage(boostBuff, author);
                    break;
                case 210:
                    const triggeredBuff = new TriggeredBuff();
                    triggeredBuff.action = this.abstractGameAction.actionId;
                    triggeredBuff.author = author;
                    triggeredBuff.parseTriggeredEffect(this.fightDispellableEffect as FightTriggeredEffectProtocol);
                    message = new ChatTriggeredBuffMessage(triggeredBuff, author);
                    break;
                case 214:
                    const stateBoostBuff = new StateBoostBuff();
                    stateBoostBuff.action = this.abstractGameAction.actionId;
                    stateBoostBuff.author = author;
                    stateBoostBuff.parseStateBoostEffect(this.fightDispellableEffect as FightTemporaryBoostStateEffectProtocol);
                    message = new ChatStateBoostBuffMessage(stateBoostBuff, author);
                    break;
                default:
                    console.error(this.fightDispellableEffect.protocolId);
                    break;
            }

            SequenceService.instance.addMessage(author, message);
        }
    }
}

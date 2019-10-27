import { PacketMessage } from '../PacketMessage';
import { FightSpellCastCriticalEnum } from '../../../../enums/FightSpellCastCriticalEnum';
import { AbstractGameActionMessage } from './AbstractGameActionMessage';

export class AbstractGameActionFightTargetedAbilityMessage extends PacketMessage {

    public gameAction: AbstractGameActionMessage;
    public silentCast: boolean;
    public verboseCast: boolean;
    public targetId: number;
    public destinationCellId: number;
    public critical: FightSpellCastCriticalEnum;

    public parse(packetMessage: any): void {
        this.gameAction = packetMessage.gameAction;
        this.silentCast = packetMessage.silentCast;
        this.verboseCast = packetMessage.verboseCast;
        this.targetId = packetMessage.targetId;
        this.destinationCellId = packetMessage.destinationCellId;
        this.critical = packetMessage.critical;
    }

    public analyze(): void {
        const gameAction = new AbstractGameActionMessage();
        gameAction.parse(this.gameAction);
        gameAction.analyze();
        this.gameAction = gameAction;
    }
}

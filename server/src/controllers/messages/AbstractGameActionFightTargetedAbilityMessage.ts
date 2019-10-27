import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "../messages/AbstractGameActionMessage";
import { FightSpellCastCriticalEnum } from "../../../../enums/FightSpellCastCriticalEnum";

export class AbstractGameActionFightTargetedAbilityMessage extends PacketMessage {

    public gameAction: AbstractGameActionMessage;
    public silentCast: boolean;
    public verboseCast: boolean;
    public targetId: number;
    public destinationCellId: number;
    public critical: FightSpellCastCriticalEnum;
    
    public analyze(packet: Packet): void {
        
        this.gameAction = new AbstractGameActionMessage();

        this.gameAction.analyze(packet);

        let flag1: number[] = BufferHelper.getBits(packet);

        this.silentCast = flag1[0] == 0;
        this.verboseCast = flag1[0] == 0;

        this.targetId = BufferHelper.getId8(packet);

        this.destinationCellId = BufferHelper.getNumber(packet, 2, true);

        this.critical = BufferHelper.getSpecialNumber(packet);
    }
}
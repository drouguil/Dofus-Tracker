import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightSpellCastMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionFightTargetedAbilityMessage;
    public spellId: number;
    public spellLevel: number;
    public portalsId: number[];

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionFightTargetedAbilityMessage();

        this.abstractGameAction.analyze(packet);

        this.spellId = BufferHelper.getSpecialNumber(packet);

        this.spellLevel = BufferHelper.getNumber(packet, 2);

        this.portalsId = BufferHelper.getNumbers(packet, 2, true);

        console.log(this);
    }
}
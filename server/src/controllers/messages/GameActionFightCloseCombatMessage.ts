import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightCloseCombatMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionFightTargetedAbilityMessage;
    public weaponId: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionFightTargetedAbilityMessage();

        this.abstractGameAction.analyze(packet);

        this.weaponId = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
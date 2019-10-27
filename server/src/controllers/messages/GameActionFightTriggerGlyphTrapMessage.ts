import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightTriggerGlyphTrapMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public markId: number;
    public markImpactCell: number;
    public triggeringCharacterId: number;
    public triggeredSpellId: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.markId = BufferHelper.getNumber(packet, 2);

        this.markImpactCell = BufferHelper.getSpecialNumber(packet);

        this.triggeringCharacterId = BufferHelper.getId8(packet);

        this.triggeredSpellId = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
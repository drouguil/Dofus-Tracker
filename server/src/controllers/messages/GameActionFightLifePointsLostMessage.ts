import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";
import { ElementEnum } from "../../../../enums/ElementEnum";

export class GameActionFightLifePointsLostMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public loss: number;
    public permanentDamages: number;
    public elementId: ElementEnum;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.loss = BufferHelper.getSpecialNumber(packet);

        this.permanentDamages = BufferHelper.getSpecialNumber(packet);

        this.elementId = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
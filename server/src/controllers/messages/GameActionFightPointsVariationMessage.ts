import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightPointsVariationMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public delta: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.delta = BufferHelper.getNumber(packet, 2, true);

        console.log(this);
    }
}
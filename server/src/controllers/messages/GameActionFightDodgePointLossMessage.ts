import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightDodgePointLossMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public amount: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.amount = BufferHelper.getSpecialNumber(packet);
        
        console.log(this);
    }
}
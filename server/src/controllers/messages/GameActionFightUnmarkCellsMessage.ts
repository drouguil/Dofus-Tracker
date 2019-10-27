import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightUnmarkCellsMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public markId: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);
        
        this.markId = BufferHelper.getNumber(packet, 2);
        
        console.log(this);
    }
}
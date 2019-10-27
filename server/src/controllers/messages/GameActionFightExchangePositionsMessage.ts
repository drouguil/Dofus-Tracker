import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightExchangePositionsMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public casterCellId: number;
    public targetCellId: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.casterCellId = BufferHelper.getNumber(packet, 2, true);

        this.targetCellId = BufferHelper.getNumber(packet, 2, true);
        
        console.log(this);
    }
}
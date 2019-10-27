import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightSlideMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public startCellId: number;
    public endCellId: number;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.startCellId = BufferHelper.getNumber(packet, 2, true);

        this.endCellId = BufferHelper.getNumber(packet, 2, true);

        console.log(this);
    }
}
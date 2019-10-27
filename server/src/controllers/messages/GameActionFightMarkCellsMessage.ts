import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";
import { GameActionMarkProtocol } from "../protocols/GameActionMarkProtocol";

export class GameActionFightMarkCellsMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public mark: GameActionMarkProtocol;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.mark = new GameActionMarkProtocol();

        this.mark.analyze(packet);

        console.log(this);
    }
}
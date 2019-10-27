import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";
import { GameActionFightInvisibilityStateEnum } from "../../../../enums/GameActionFightInvisibilityStateEnum";

export class GameActionFightInvisibilityMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public targetId: number;
    public state: GameActionFightInvisibilityStateEnum;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.state = BufferHelper.getSpecialNumber(packet);
        
        console.log(this);
    }
}
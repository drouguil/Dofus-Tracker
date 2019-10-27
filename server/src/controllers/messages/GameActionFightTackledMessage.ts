import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class GameActionFightTackledMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public tacklersIds: number[];

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.tacklersIds = new Array();

        let idsLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < idsLength; index++) {
            let id: number = BufferHelper.getId8(packet);
            this.tacklersIds.push(id);
        }

        console.log(this);
    }
}
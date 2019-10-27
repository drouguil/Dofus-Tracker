import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameActionFightSummonMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public fighters: PacketProtocol[];

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        this.fighters = new Array();

        let fightersLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < fightersLength; index++) {
            let protocolId: number = BufferHelper.getNumber(packet, 2);
            this.fighters.push(protocolManager.analyze(protocolId, packet));
        }

        console.log(this);
    }
}
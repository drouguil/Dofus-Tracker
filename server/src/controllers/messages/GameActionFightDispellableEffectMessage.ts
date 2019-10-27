import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameActionFightDispellableEffectMessage extends PacketMessage {

    public abstractGameAction: AbstractGameActionMessage;
    public fightDispellableEffect: PacketProtocol;

    public analyze(packet: Packet): void {

        this.abstractGameAction = new AbstractGameActionMessage();

        this.abstractGameAction.analyze(packet);

        let fightDispellableId: number = BufferHelper.getNumber(packet, 2);

        this.fightDispellableEffect = protocolManager.analyze(fightDispellableId, packet);

        console.log(this);
    }
}
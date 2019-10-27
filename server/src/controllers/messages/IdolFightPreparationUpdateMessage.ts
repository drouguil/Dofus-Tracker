import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class IdolFightPreparationUpdateMessage extends PacketMessage {

    public idolSource: number;
    public idols: PacketProtocol[];

    public analyze(packet: Packet): void {

        this.idolSource = BufferHelper.getSpecialNumber(packet);

        this.idols = new Array();

        let idolsLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < idolsLength; index++) {
            let protocolId: number = BufferHelper.getNumber(packet, 2);
            let idol: PacketProtocol = protocolManager.analyze(protocolId, packet);
            this.idols.push(idol);
        }

        console.log(this);
    }
}
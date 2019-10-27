import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameFightSynchronizeMessage extends PacketMessage {

    public fighters: PacketProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.debug(packet);

        /*this.fighters = new Array();

        let fightersLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < fightersLength; index++) {
            let protcolId: number = BufferHelper.getNumber(packet, 2);
            this.fighters.push(protocolManager.analyze(protcolId, packet));
        }*/

        console.log(this);
    }
}
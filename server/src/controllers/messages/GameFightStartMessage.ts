import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { IdolProtocol } from "../protocols/IdolProtocol";

export class GameFightStartMessage extends PacketMessage {

    public idols: IdolProtocol[];

    public analyze(packet: Packet): void {
        
        this.idols = new Array();

        let idolsLength: number = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < idolsLength; index++) {
            let idol: IdolProtocol = new IdolProtocol();
            idol.analyze(packet);
            this.idols.push(idol);
        }

        console.log(this);
    }
}
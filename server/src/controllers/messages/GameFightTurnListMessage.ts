import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightTurnListMessage extends PacketMessage {

    public ids: number[];
    public deadsIds: number[];

    public analyze(packet: Packet): void {

        this.ids = new Array();

        let idsLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < idsLength; index++) {
            let id: number = BufferHelper.getId8(packet);
            this.ids.push(id);
        }

        this.deadsIds = new Array();

        let deadsIdsLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < deadsIdsLength; index++) {
            let id: number = BufferHelper.getId8(packet);
            this.deadsIds.push(id);
        }

        console.log(this);
    }
}
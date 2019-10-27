import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { IdentifiedEntityDispositionInfosProtocol } from "../protocols/IdentifiedEntityDispositionInfosProtocol";

export class GameEntitiesDispositionMessage extends PacketMessage {

    public dispositions: IdentifiedEntityDispositionInfosProtocol[];

    public analyze(packet: Packet): void {

        this.dispositions = new Array();

        let entitiesLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < entitiesLength; index++) {
            let entity: IdentifiedEntityDispositionInfosProtocol = new IdentifiedEntityDispositionInfosProtocol();
            entity.analyze(packet);
            this.dispositions.push(entity);
        }

        console.log(this);
    }
}
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ActorRestrictionsInfosProtocol } from "../protocols/ActorRestrictionsInfosProtocol";

export class SetCharacterRestrictionsMessage extends PacketMessage {

    public actorId: number;
    public restrictions: ActorRestrictionsInfosProtocol;

    public analyze(packet: Packet): void {

        this.actorId = BufferHelper.getId8(packet);

        this.restrictions = new ActorRestrictionsInfosProtocol();

        this.restrictions.analyze(packet);

        console.log(this);
    }
}
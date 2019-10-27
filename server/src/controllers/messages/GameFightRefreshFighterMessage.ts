import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { GameContextActorInfosProtocol } from "../protocols/GameContextActorInfosProtocol";

export class GameFightRefreshFighterMessage extends PacketMessage {

    public infos: GameContextActorInfosProtocol;

    public analyze(packet: Packet): void {

        const protocolId = BufferHelper.getNumber(packet, 2);

        this.infos = new GameContextActorInfosProtocol();

        this.infos.analyze(packet);

        console.log(this);
    }
}
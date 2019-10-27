import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { HouseInfosProtocol } from "../protocols/HouseInfosProtocol";
import { GameRolePlayActorInfosProtocol } from "../protocols/GameRolePlayActorInfosprotocol";
import { InteractiveElementProtocol } from "../protocols/InteractiveElementProtocol";
import { StatedElementProtocol } from "../protocols/StatedElementProtocol";
import { MapObstacleProtocol } from "../protocols/MapObstacleProtocol";
import { FightCommonInfosProtocol } from "../protocols/FightCommonInfosProtocol";

export class MapComplementaryInfosDataMessage extends PacketMessage {

    public subAreaId: number;
    public mapId: number;
    public houses: HouseInfosProtocol[];
    public actors: GameRolePlayActorInfosProtocol[];
    public interactiveElements: InteractiveElementProtocol[];
    public statedElements: StatedElementProtocol[];
    public obstacles: MapObstacleProtocol[];
    public fights: FightCommonInfosProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
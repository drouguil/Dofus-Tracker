import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { GameContextActorInfosProtocol } from "./GameContextActorInfosProtocol";

export class GameRolePlayActorInfosProtocol extends PacketProtocol {

    public context: GameContextActorInfosProtocol;

    public analyze(packet: Packet): void {
        
        this.context = new GameContextActorInfosProtocol();

        this.context.analyze(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.context = object.context;
    }
}
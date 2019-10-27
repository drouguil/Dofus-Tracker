import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { EntityLookProtocol } from "./EntityLookProtocol";
import { protocolManager } from "../../helpers/ProtocolManager";

export class GameContextActorInfosProtocol extends PacketProtocol {

    constructor() {
        super(150);
    }

    public contextualId: number;
    public look: EntityLookProtocol;
    public disposition: PacketProtocol;

    public analyze(packet: Packet): void {

        this.contextualId = BufferHelper.getId8(packet);

        this.look = new EntityLookProtocol();

        this.look.analyze(packet);

        let dispositionId: number = BufferHelper.getNumber(packet, 2);

        this.disposition = protocolManager.analyze(dispositionId, packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.contextualId = object.contextualId;
        this.look = object.look;
        this.disposition = object.disposition;
    }
}
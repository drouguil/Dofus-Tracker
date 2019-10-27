import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { MonsterInGroupLightInfosProtocol } from "../protocols/MonsterInGroupLightInfosProtocol";
import { EntityLookProtocol } from "./EntityLookProtocol";

export class MonsterInGroupInfosProtocol extends PacketProtocol {

    constructor() {
        super(144);
    }

    public mainCreatureLightInfos: MonsterInGroupLightInfosProtocol;
    public entityLook: EntityLookProtocol;

    public analyze(packet: Packet): void {

        this.mainCreatureLightInfos = new MonsterInGroupLightInfosProtocol();

        this.mainCreatureLightInfos.analyze(packet);

        this.entityLook = new EntityLookProtocol();

        this.entityLook.analyze(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.mainCreatureLightInfos = object.mainCreatureLightInfos;
        this.entityLook = object.entityLook;
    }
}
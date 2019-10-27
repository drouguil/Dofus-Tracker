import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { MonsterInGroupLightInfosProtocol } from "../protocols/MonsterInGroupLightInfosProtocol";
import { MonsterInGroupInfosProtocol } from "../protocols/MonsterInGroupInfosProtocol";

export class GroupMonsterStaticInfosProtocol extends PacketProtocol {

    constructor() {
        super(143);
    }

    public mainCreatureLightInfos: MonsterInGroupLightInfosProtocol;
    public underlings: MonsterInGroupInfosProtocol[];

    public analyze(packet: Packet): void {

        this.mainCreatureLightInfos = new MonsterInGroupLightInfosProtocol();

        this.mainCreatureLightInfos.analyze(packet);

        this.underlings = new Array();

        let underlingsLength = BufferHelper.getNumber(packet, 2);
        
        for (let index = 0; index < underlingsLength; index++) {
            let underling: MonsterInGroupInfosProtocol = new MonsterInGroupInfosProtocol();
            underling.analyze(packet);
            this.underlings.push(underling);
        }
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.mainCreatureLightInfos = object.mainCreatureLightInfos;
        this.underlings = object.underlings;
    }
}
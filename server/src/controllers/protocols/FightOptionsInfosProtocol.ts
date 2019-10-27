import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class FightOptionsInfosProtocol extends PacketProtocol {

    constructor() {
        super(20);
    }

    public isSecret: boolean;
    public isRestrictedToPartyOnly: boolean;
    public isClosed: boolean;
    public isAskingForHelp: boolean;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.isSecret = object.isSecret;
        this.isRestrictedToPartyOnly = object.isRestrictedToPartyOnly;
        this.isClosed = object.isClosed;
        this.isAskingForHelp = object.isAskingForHelp;
    }
}
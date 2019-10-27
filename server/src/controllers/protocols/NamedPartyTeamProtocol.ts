import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class NamedPartyTeamProtocol extends PacketProtocol {

    constructor() {
        super(469);
    }

    public teamId: number;
    public partyName: string;

    public analyze(packet: Packet): void {
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.teamId = object.teamId;
        this.partyName = object.partyName;
    }
}
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { NamedPartyTeamProtocol } from "./NamedPartyTeamProtocol";

export class NamedPartyTeamWithOutcomeProtocol extends PacketProtocol {

    constructor() {
        super(470);
    }

    public team: NamedPartyTeamProtocol;
    public outcome: number;

    public analyze(packet: Packet): void {
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.team = object.team;
        this.outcome = object.outcome;
    }
}
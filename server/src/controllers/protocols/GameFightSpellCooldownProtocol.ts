import { Packet } from "../../models/packets/Packet";
import { PacketProtocol } from "../PacketProtocol";
import { GameFightAIInfosProtocol } from "./GameFightAIInfosProtocol";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightSpellCooldownProtocol extends PacketProtocol {

    constructor() {
        super(205);
    }

    public spellId: number;
    public cooldown: number;

    public analyze(packet: Packet): void {

    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.spellId = object.spellId;
        this.cooldown = object.cooldown;
    }
}
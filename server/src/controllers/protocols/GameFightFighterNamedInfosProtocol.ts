import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { GameFightFighterInfosProtocol } from "./GameFightFighterInfosProtocol";
import { PlayerStatusProtocol } from "./PlayerStatusProtocol";

export class GameFightFighterNamedInfosProtocol extends PacketProtocol {

    constructor() {
        super(158);
    }

    public gameFightFighterInfosProtocol: GameFightFighterInfosProtocol;
    public name: string;
    public status: PlayerStatusProtocol;
    public leagueId: number;
    public ladderPosition: number;
    public hiddenInPrefight: boolean;

    public analyze(packet: Packet): void {
        
        this.gameFightFighterInfosProtocol = new GameFightFighterInfosProtocol();

        this.gameFightFighterInfosProtocol.analyze(packet);

        this.name = BufferHelper.getText(packet);

        this.status = new PlayerStatusProtocol();

        this.status.analyze(packet);
        
        this.leagueId = BufferHelper.getSpecialNumber(packet, true);
        
        this.ladderPosition = BufferHelper.getNumber(packet, 4);
        
        this.hiddenInPrefight = BufferHelper.getBoolean(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.gameFightFighterInfosProtocol = object.gameFightFighterInfosProtocol;
        this.name = object.name;
        this.status = object.status;
        this.leagueId = object.leagueId;
        this.ladderPosition = object.ladderPosition;
        this.hiddenInPrefight = object.hiddenInPrefight;
    }
}
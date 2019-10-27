import { PacketProtocol } from '../PacketProtocol';
import { protocolManager } from '../../helpers/ProtocolManager';
import { TeamFightEnum } from '../../../../enums/TeamFightEnum';

export class GameFightFighterInfosProtocol extends PacketProtocol {

    constructor() {
        super(143);
    }

    public team: TeamFightEnum;
    public wave: number;
    public alive: boolean;
    public stats: PacketProtocol;
    public previousPositions: number[];

    public parse(packetProtocol: any): void {
        this.team = packetProtocol.team;
        this.wave = packetProtocol.wave;
        this.alive = packetProtocol.alive;
        this.stats = packetProtocol.stats;
        this.previousPositions = packetProtocol.previousPositions;
    }

    public analyze(): void {
        if (this.stats) {
            this.stats = protocolManager.analyze(this.stats.protocolId, this.stats);
        }
        // console.log(this);
    }
}

import { PacketProtocol } from '../PacketProtocol';
import { EntityLookProtocol } from './EntityLookProtocol';
import { protocolManager } from '../../helpers/ProtocolManager';

export class GameContextActorInfosProtocol extends PacketProtocol {

    constructor() {
        super(150);
    }

    public contextualId: number;
    public look: EntityLookProtocol;
    public disposition: PacketProtocol;

    public parse(packetProtocol: any): void {
        this.contextualId = packetProtocol.contextualId;
        this.look = packetProtocol.look;
        this.disposition = packetProtocol.disposition;
    }

    public analyze(): void {
        if (this.look) {
            const entityLookProtocol: EntityLookProtocol = new EntityLookProtocol();
            entityLookProtocol.parse(this.look);
            entityLookProtocol.analyze();
            this.look = entityLookProtocol;
        }
        if (this.disposition) {
            this.disposition = protocolManager.analyze(this.disposition.protocolId, this.disposition);
        }
        // console.log(this);
    }
}

import { PacketProtocol } from '../PacketProtocol';
import { EntityDispositionInfosProtocol } from './EntityDispositionInfosProtocol';

export class FightEntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(217);
    }

    public entityDispositionInfosProtocol: EntityDispositionInfosProtocol;
    public carryingCharacterId: number;

    public parse(packetProtocol: any): void {
        this.entityDispositionInfosProtocol = packetProtocol.entityDispositionInfosProtocol;
        this.carryingCharacterId = packetProtocol.carryingCharacterId;
    }

    public analyze(): void {
        const entityDispositionInfosProtocol = new EntityDispositionInfosProtocol();
        entityDispositionInfosProtocol.parse(this.entityDispositionInfosProtocol);
        entityDispositionInfosProtocol.analyze();
        this.entityDispositionInfosProtocol = entityDispositionInfosProtocol;
        // console.log(this);
    }
}

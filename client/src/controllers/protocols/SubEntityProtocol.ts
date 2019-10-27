import { PacketProtocol } from '../PacketProtocol';
import { EntityLookProtocol } from './EntityLookProtocol';

export class SubEntityProtocol extends PacketProtocol {

    constructor() {
        super(54);
    }

    public bindingPointCategory: number;
    public bindingPointIndex: number;
    public subEntityLook: EntityLookProtocol;

    public parse(packetProtocol: any): void {
        this.bindingPointCategory = packetProtocol.bindingPointCategory;
        this.bindingPointIndex = packetProtocol.bindingPointIndex;
        this.subEntityLook = packetProtocol.subEntityLook;
    }

    public analyze(): void {
        if (this.subEntityLook) {
            const entityLookProtocol: EntityLookProtocol = new EntityLookProtocol();
            entityLookProtocol.parse(this.subEntityLook);
            entityLookProtocol.analyze();
            this.subEntityLook = entityLookProtocol;
        }
        // console.log(this);
    }
}

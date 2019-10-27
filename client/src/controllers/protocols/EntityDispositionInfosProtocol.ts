import { PacketProtocol } from '../PacketProtocol';
import { DirectionEnum } from '../../../../enums/DirectionEnum';

export class EntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(60);
    }

    public cellId: number;
    public direction: DirectionEnum;

    public parse(packetProtocol: any): void {
        this.cellId = packetProtocol.cellId;
        this.direction = packetProtocol.direction;
    }

    public analyze(): void {
        // console.log(this);
    }
}

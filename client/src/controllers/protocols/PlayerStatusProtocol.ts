import { PacketProtocol } from '../PacketProtocol';
import { PlayerStatusEnum } from '../../../../enums/PlayerStatusEnum';

export class PlayerStatusProtocol extends PacketProtocol {

    constructor() {
        super(415);
    }

    public status: PlayerStatusEnum;

    public parse(packetProtocol: any): void {
        this.status = packetProtocol.status;
    }

    public analyze(): void {
        // console.log(this);
    }
}

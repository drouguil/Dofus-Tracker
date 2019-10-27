import { PacketMessage } from '../../controllers/PacketMessage';

export class MessageSocket {
    public packetId: number;
    public packetMessage: PacketMessage;
    public countClient: number;

    constructor(public sender: string) {}
}
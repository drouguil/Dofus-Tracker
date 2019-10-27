import { PacketMessage } from '../PacketMessage';
import { PacketProtocol } from '../PacketProtocol';
import { protocolManager } from '../../helpers/ProtocolManager';

export class GameFightShowFighterMessage extends PacketMessage {

    public protocol: PacketProtocol;

    public parse(packetMessage: any): void {
        this.protocol = packetMessage.protocol;
    }

    public analyze(): void {
        protocolManager.analyze(this.protocol.protocolId, this.protocol);
    }
}

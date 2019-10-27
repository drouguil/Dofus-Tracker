import { PacketMessage } from '../PacketMessage';
import { FightService } from '../../app/services/fight.service';

export class GameFightStartMessage extends PacketMessage {


    public parse(packetMessage: any): void {
    }

    public analyze(): void {
        FightService.instance.isFightStarted = true;
    }
}

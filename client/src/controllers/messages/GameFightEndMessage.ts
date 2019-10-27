import { PacketMessage } from '../PacketMessage';
import { FightService } from '../../app/services/fight.service';

export class GameFightEndMessage extends PacketMessage {

    public parse(packetMessage: any): void {
    }

    public analyze(): void {
        FightService.instance.isFight = false;
        // FightService.instance.endFight();
    }
}

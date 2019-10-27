import { PacketMessage } from '../PacketMessage';
import { FightService } from '../../app/services/fight.service';

export class GameFightStartingMessage extends PacketMessage {


    public parse(packetMessage: any): void {
    }

    public analyze(): void {
        FightService.instance.endFight();
        FightService.instance.isFight = true;
    }
}

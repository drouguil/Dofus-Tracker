import { PacketMessage } from '../PacketMessage';
import { TimelineService } from '../../app/services/timeline.service';

export class GameFightNewRoundMessage extends PacketMessage {

    public roundNumber: number;


    public parse(packetMessage: any): void {
        this.roundNumber = packetMessage.roundNumber;
    }

    public analyze(): void {
        TimelineService.instance.turn = this.roundNumber;
    }
}

import { PacketMessage } from '../PacketMessage';
import { TimelineService } from '../../app/services/timeline.service';

export class GameFightTurnListMessage extends PacketMessage {

    public ids: number[];
    public deadsIds: number[];

    public parse(packetMessage: any): void {
        this.ids = packetMessage.ids;
        this.deadsIds = packetMessage.deadsIds;
    }

    public analyze(): void {
        TimelineService.instance.setTimeline(this.ids);
    }
}

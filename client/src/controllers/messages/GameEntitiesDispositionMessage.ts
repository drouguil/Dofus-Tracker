import { PacketMessage } from '../PacketMessage';
import { IdentifiedEntityDispositionInfosProtocol } from '../protocols/IdentifiedEntityDispositionInfosProtocol';
import { TimelineService } from '../../app/services/timeline.service';

export class GameEntitiesDispositionMessage extends PacketMessage {

    public dispositions: IdentifiedEntityDispositionInfosProtocol[];

    public parse(packetMessage: any): void {
        this.dispositions = packetMessage.dispositions;
    }

    public analyze(): void {
        const entitiesId: number[] = new Array();
        this.dispositions.forEach((protocol: any) => {
            const disposition: IdentifiedEntityDispositionInfosProtocol = new IdentifiedEntityDispositionInfosProtocol();
            disposition.parse(protocol);
            disposition.analyze();
            entitiesId.push(disposition.id);
        });
    }
}

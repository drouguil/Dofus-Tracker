import { PacketMessage } from '../PacketMessage';
import { MapService } from '../../app/services/map.service';

export class GameFightPlacementPossiblePositionsMessage extends PacketMessage {

    public positionsForChallengers: number[];
    public positionsForDefenders: number[];
    public teamNumber: number;

    public parse(packetMessage: any): void {
        this.positionsForChallengers = packetMessage.positionsForChallengers;
        this.positionsForDefenders = packetMessage.positionsForDefenders;
        this.teamNumber = packetMessage.teamNumber;
    }

    public analyze(): void {
        MapService.instance.updatePlacement(this.positionsForChallengers, this.positionsForDefenders);
    }
}

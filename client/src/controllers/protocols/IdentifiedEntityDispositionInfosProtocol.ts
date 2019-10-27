import { PacketProtocol } from '../PacketProtocol';
import { DirectionEnum } from '../../../../enums/DirectionEnum';
import { FightService } from '../../app/services/fight.service';
import { Entity } from '../../models/fight/entity/Entity';

export class IdentifiedEntityDispositionInfosProtocol extends PacketProtocol {

    constructor() {
        super(107);
    }

    public cellId: number;
    public direction: DirectionEnum;
    public id: number;

    public parse(packetProtocol: any): void {
        this.cellId = packetProtocol.cellId;
        this.direction = packetProtocol.direction;
        this.id = packetProtocol.id;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.id);
        if (entity) {
          entity.direction = this.direction;
          entity.setCell(this.cellId);
        } else {
            FightService.instance.setEntity(new Entity(this.id, this.direction, this.cellId));
        }
    }
}

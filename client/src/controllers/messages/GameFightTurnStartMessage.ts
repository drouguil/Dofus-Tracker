import { PacketMessage } from '../PacketMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { FightService } from '../../app/services/fight.service';

export class GameFightTurnStartMessage extends PacketMessage {

    public id: number;
    public waitTime: number;

    public parse(packetMessage: any): void {
        this.id = packetMessage.id;
        this.waitTime = packetMessage.waitTime;
    }

    public analyze(): void {
        const entity: Entity | undefined = FightService.instance.getEntityById(this.id);
        if (entity) {
            entity.isTurn = true;
            FightService.instance.reduceBuff(entity);
            entity.summons.forEach((summon: Entity) => {
                if (summon.isStatic) {
                    FightService.instance.reduceBuff(summon);
                }
            });
        }
    }
}

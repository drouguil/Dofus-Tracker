import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { DirectionEnum } from '../../../../enums/DirectionEnum';

export class GameMapMovementMessage extends PacketMessage {

    public keyMovements: number[];
    public direction: DirectionEnum;
    public actorId: number;

    public analyze(packet: Packet): void {

        this.keyMovements = new Array();

        let keyMovementsLength: number = BufferHelper.getNumber(packet,2);

        for (let index = 0; index < keyMovementsLength; index++) {
            let key: number = BufferHelper.getNumber(packet, 2);
            this.keyMovements.push(key);
        }

        this.direction = BufferHelper.getNumber(packet, 2);

        this.actorId = BufferHelper.getId8(packet);
        
        console.log(this);
    }
}
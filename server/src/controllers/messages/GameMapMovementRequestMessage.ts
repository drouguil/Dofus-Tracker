import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { DirectionEnum } from '../../../../enums/DirectionEnum';

export class GameMapMovementRequestMessage extends PacketMessage {

    public keyMovements: number[];
    public direction: DirectionEnum;
    public mapId: number;

    public analyze(packet: Packet): void {
        
        BufferHelper.slice(packet, packet.dataLen);
        
        console.log(this);
    }
}
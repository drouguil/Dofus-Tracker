import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { FightTypeEnum } from "../../../../enums/FightTypeEnum";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightStartingMessage extends PacketMessage {

    public fightType: FightTypeEnum;
    public fightId: number;
    public attackerId: number;
    public defenderId: number;

    public analyze(packet: Packet): void {

        this.fightType = BufferHelper.getSpecialNumber(packet);

        this.fightId = BufferHelper.getSpecialNumber(packet);
        
        this.attackerId = BufferHelper.getId8(packet);
        
        this.defenderId = BufferHelper.getId8(packet);

        console.log(this);
    }
}
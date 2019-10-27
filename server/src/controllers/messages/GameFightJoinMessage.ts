import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { FightTypeEnum } from "../../../../enums/FightTypeEnum";

export class GameFightJoinMessage extends PacketMessage {

    public isTeamPhase: boolean;
    public canBeCancelled: boolean;
    public canSayReady: boolean;
    public isFightStarted: boolean;
    public timeMaxBeforeFightStart: number;
    public fightType: FightTypeEnum;

    public analyze(packet: Packet): void {

        let flag1: number[] = BufferHelper.getBits(packet);

        this.isTeamPhase = flag1[0] == 0;
        this.canBeCancelled = flag1[1] == 0;
        this.canSayReady = flag1[2] == 0;
        this.isFightStarted = flag1[3] == 0;
        
        this.timeMaxBeforeFightStart = BufferHelper.getNumber(packet, 2);

        this.fightType = BufferHelper.getNumber(packet, 1, true);

        console.log(this);
    }
}
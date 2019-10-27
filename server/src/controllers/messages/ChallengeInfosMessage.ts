import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ChallengeEnum } from "../../../../enums/ChallengeEnum";

export class ChallengeInfosMessage extends PacketMessage {

    public challengeId: ChallengeEnum;
    public targetId: number;
    public xpBonus: number;
    public dropBonus: number;

    public analyze(packet: Packet): void {

        this.challengeId = BufferHelper.getSpecialNumber(packet);

        this.targetId = BufferHelper.getId8(packet);

        this.xpBonus = BufferHelper.getSpecialNumber(packet);

        this.dropBonus = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
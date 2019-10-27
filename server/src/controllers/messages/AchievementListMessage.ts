import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { AchievementAchievedProtocol } from "../protocols/AchievementAchievedProtocol";

export class AchievementListMessage extends PacketMessage {

    public finishedAchievementsIds: number[];
    public rewardableAchievements: AchievementAchievedProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
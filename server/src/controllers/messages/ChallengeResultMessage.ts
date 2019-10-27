
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ChallengeEnum } from "../../../../enums/ChallengeEnum";

export class ChallengeResultMessage extends PacketMessage {

    public challenge: ChallengeEnum;
    public isSuccess: boolean;

    public analyze(packet: Packet): void {

        this.challenge = BufferHelper.getSpecialNumber(packet);

        this.isSuccess = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
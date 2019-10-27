
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class CharacterExperienceGainMessage extends PacketMessage {

    public experienceCharacter: number;
    public experienceMount: number;
    public experienceGuild: number;
    public experienceIncarnation: number;

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
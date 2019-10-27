import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { QuestActiveInfosProtocol } from "../protocols/QuestActiveInfosProtocol";

export class QuestListMessage extends PacketMessage {

    public finishedQuestsIds: number[];
    public finishedQuestsCounts: number[];
    public activeQuests: QuestActiveInfosProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}
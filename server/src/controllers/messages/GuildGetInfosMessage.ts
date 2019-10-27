import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { GuildInfosTypeEnum } from "../../../../enums/GuildInfosTypeEnum";

export class GuildGetInfosMessage extends PacketMessage {

    public infosType: GuildInfosTypeEnum;

    public analyze(packet: Packet): void {

        this.infosType = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}

import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ChannelEnum } from "../../../../enums/ChannelEnum";

export class ChannelEnablingChangeMessage extends PacketMessage {

    public channel: ChannelEnum;
    public isEnabled: boolean;

    public analyze(packet: Packet): void {

        this.channel = BufferHelper.getSpecialNumber(packet);

        this.isEnabled = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
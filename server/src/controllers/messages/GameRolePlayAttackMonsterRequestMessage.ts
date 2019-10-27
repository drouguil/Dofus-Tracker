import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameRolePlayAttackMonsterRequestMessage extends PacketMessage {

    public groupId: number;

    public analyze(packet: Packet): void {

        this.groupId = BufferHelper.getId8(packet);

        console.log(this);
    }
}
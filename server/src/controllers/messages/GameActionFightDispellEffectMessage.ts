import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellEffectMessage extends PacketMessage {

    public fightDispell: GameActionFightDispellMessage;
    public boostUID: number;

    public analyze(packet: Packet): void {

        this.fightDispell = new GameActionFightDispellMessage();

        this.fightDispell.analyze(packet);

        this.boostUID = BufferHelper.getNumber(packet, 4);

        console.log(this);
    }
}
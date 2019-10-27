import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { GameActionFightLifePointsLostMessage } from "./GameActionFightLifePointsLostMessage";

export class GameActionFightLifeAndShieldPointsLostMessage extends PacketMessage {

    public lifePointsLost: GameActionFightLifePointsLostMessage;
    public shieldLoss: number;

    public analyze(packet: Packet): void {

        this.lifePointsLost = new GameActionFightLifePointsLostMessage();

        this.lifePointsLost.analyze(packet);

        this.shieldLoss = BufferHelper.getSpecialNumber(packet);

        console.log(this);
    }
}
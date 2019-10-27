import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellSpellMessage extends PacketMessage {

    public fightDispell: GameActionFightDispellMessage;
    public spellId: number;

    public analyze(packet: Packet): void {

        this.fightDispell = new GameActionFightDispellMessage();

        this.fightDispell.analyze(packet);

        this.spellId = BufferHelper.getSpecialNumber(packet);
        
        console.log(this);
    }
}
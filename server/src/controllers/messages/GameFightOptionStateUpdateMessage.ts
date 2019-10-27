import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightOptionStateUpdateMessage extends PacketMessage {

    public fightId: number;
    public teamId: number;
    public option: number;
    public state: boolean;

    public analyze(packet: Packet): void {

        this.fightId = BufferHelper.getSpecialNumber(packet);
        
        this.teamId = BufferHelper.getSpecialNumber(packet);
        
        this.option = BufferHelper.getSpecialNumber(packet);
        
        this.state = BufferHelper.getBoolean(packet);

        console.log(this);
    }
}
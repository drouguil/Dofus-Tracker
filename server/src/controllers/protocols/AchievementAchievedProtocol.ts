import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class AchievementAchievedProtocol extends PacketProtocol {

    constructor() {
        super(514);
    }

    public id: number;
    public achievedBy: number;

    public analyze(packet: Packet): void {
        this.id = BufferHelper.getSpecialNumber(packet, true);

        this.achievedBy = BufferHelper.getSpecialNumber(packet, true);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.id = object.id;
        this.achievedBy = object.finishedlevel;
    }
}
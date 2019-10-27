import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class IdolProtocol extends PacketProtocol {

    constructor() {
        super(489);
    }

    public id: number;
    public xpBonusPercent: number;
    public dropBonusPercent: number;

    public analyze(packet: Packet): void {
        this.id = BufferHelper.getSpecialNumber(packet);
        
        this.xpBonusPercent = BufferHelper.getSpecialNumber(packet);
        
        this.dropBonusPercent = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.id = object.id;
        this.xpBonusPercent = object.xpBonusPercent;
        this.dropBonusPercent = object.dropBonusPercent;
    }
}
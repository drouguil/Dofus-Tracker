import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { PlayerStatusEnum } from "../../../../enums/PlayerStatusEnum";

export class PlayerStatusProtocol extends PacketProtocol {

    constructor() {
        super(415);
    }

    public status: PlayerStatusEnum;

    public analyze(packet: Packet): void {
        this.status = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.status = object.status;
    }
}
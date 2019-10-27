import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { TeamFightEnum } from "../../../../enums/TeamFightEnum";
import { PacketProtocol } from "../PacketProtocol";
import { GameActionMarkCellsTypeEnum } from "../../../../enums/GameActionMarkCellsTypeEnum";

export class GameActionMarkedCellProtocol extends PacketProtocol {

    constructor() {
        super(85);
    }

    public cellId: number;
    public zoneSize: number;
    public cellColor: number;
    public cellsType: GameActionMarkCellsTypeEnum;

    public analyze(packet: Packet): void {

        this.cellId = BufferHelper.getSpecialNumber(packet);

        this.zoneSize = BufferHelper.getSpecialNumber(packet);

        this.cellColor = BufferHelper.getNumber(packet, 4);

        this.cellsType = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.cellId = object.cellId;
        this.zoneSize = object.zoneSize;
        this.cellColor = object.cellColor;
        this.cellsType = object.cellsType;
    }
}
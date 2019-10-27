import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { TeamFightEnum } from "../../../../enums/TeamFightEnum";
import { PacketProtocol } from "../PacketProtocol";
import { GameActionMarkTypeEnum } from "../../../../enums/GameActionMarkTypeEnum";
import { GameActionMarkedCellProtocol } from "./GameActionMarkedCellProtocol";

export class GameActionMarkProtocol extends PacketProtocol {

    constructor() {
        super(351);
    }

    public markAuthorId: number;
    public markTeamId: TeamFightEnum;
    public markSpellId: number;
    public markSpellLevel: number;
    public markId: number;
    public markType: GameActionMarkTypeEnum;
    public markImpactCell: number;
    public cells: GameActionMarkedCellProtocol[];
    public active: boolean;

    public analyze(packet: Packet): void {

        this.markAuthorId = BufferHelper.getId8(packet);

        this.markTeamId = BufferHelper.getSpecialNumber(packet);

        this.markSpellId = BufferHelper.getNumber(packet, 4);

        this.markSpellLevel = BufferHelper.getNumber(packet, 2);

        this.markId = BufferHelper.getNumber(packet, 2);

        this.markType = BufferHelper.getSpecialNumber(packet);

        this.markImpactCell = BufferHelper.getNumber(packet, 2, true);

        const cellsLength = BufferHelper.getNumber(packet, 2);

        this.cells = new Array();

        for (let index = 0; index < cellsLength; index++) {
            const cell = new GameActionMarkedCellProtocol();
            cell.analyze(packet);
            this.cells.push(cell);
        }

        this.active = BufferHelper.getBoolean(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.markAuthorId = object.markAuthorId;
        this.markTeamId = object.markTeamId;
        this.markSpellId = object.markSpellId;
        this.markSpellLevel = object.markSpellLevel;
        this.markId = object.markId;
        this.markType = object.markType;
        this.markImpactCell = object.markImpactCell;
        this.cells = object.cells;
        this.active = object.active;
    }
}
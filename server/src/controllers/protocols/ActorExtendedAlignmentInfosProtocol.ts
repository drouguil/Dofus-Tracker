import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { AggressableStatusEnum } from "../../../../enums/AggressableStatusEnum";
import { ActorAlignmentInfosProtocol } from "./ActorAlignmentInfosProtocol";

export class ActorExtendedAlignmentInfosProtocol extends PacketProtocol {

    constructor() {
        super(202);
    }

    public actorAlignmentInfosProtocol: ActorAlignmentInfosProtocol;
    public honor: number;
    public honorGradeFloor: number;
    public honorNextGradeFloor: number;
    public aggressable: AggressableStatusEnum;

    public analyze(packet: Packet): void {
        
        this.actorAlignmentInfosProtocol = new ActorAlignmentInfosProtocol();

        this.actorAlignmentInfosProtocol.analyze(packet);

        this.honor = BufferHelper.getSpecialNumber(packet);

        this.honorGradeFloor = BufferHelper.getSpecialNumber(packet);

        this.honorNextGradeFloor = BufferHelper.getSpecialNumber(packet);

        this.aggressable = BufferHelper.getSpecialNumber(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.actorAlignmentInfosProtocol = object.actorAlignmentInfosProtocol;
        this.honor = object.honor;
        this.honorGradeFloor = object.honorGradeFloor;
        this.honorNextGradeFloor = object.honorNextGradeFloor;
        this.aggressable = object.aggressable;
    }
}
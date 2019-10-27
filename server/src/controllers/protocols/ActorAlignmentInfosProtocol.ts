import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { AlignmentSideEnum } from "../../../../enums/AlignmentSideEnum";

export class ActorAlignmentInfosProtocol extends PacketProtocol {

    constructor() {
        super(201);
    }

    public alignmentSide: AlignmentSideEnum;
    public alignmentValue: number;
    public alignmentGrade: number;
    public characterPower: number;

    public analyze(packet: Packet): void {
        this.alignmentSide = BufferHelper.getSpecialNumber(packet, true);

        this.alignmentValue = BufferHelper.getSpecialNumber(packet);

        this.alignmentGrade = BufferHelper.getSpecialNumber(packet);

        this.characterPower = BufferHelper.getId8(packet);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.alignmentSide = object.alignmentSide;
        this.alignmentValue = object.alignmentValue;
        this.alignmentGrade = object.alignmentGrade;
        this.characterPower = object.characterPower;
    }
}
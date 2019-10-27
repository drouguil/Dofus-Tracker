import { PacketProtocol } from '../PacketProtocol';
import { AlignmentSideEnum } from '../../../../enums/AlignmentSideEnum';

export class ActorAlignmentInfosProtocol extends PacketProtocol {

    constructor() {
        super(201);
    }

    public alignmentSide: AlignmentSideEnum;
    public alignmentValue: number;
    public alignmentGrade: number;
    public characterPower: number;

    public parse(packetProtocol: any): void {
        this.alignmentSide = packetProtocol.alignmentSide;
        this.alignmentValue = packetProtocol.alignmentValue;
        this.alignmentGrade = packetProtocol.alignmentGrade;
        this.characterPower = packetProtocol.characterPower;
    }

    public analyze(): void {
        // console.log(this);
    }
}

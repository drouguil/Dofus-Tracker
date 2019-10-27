import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { InteractiveElementSkillProtocol } from "./InteractiveElementSkillProtocol";

export class InteractiveElementProtocol extends PacketProtocol {

    constructor() {
        super(80);
    }

    public elementId: number;
    public elementTypeId: number;
    public enabledSkills: InteractiveElementSkillProtocol[];
    public disabledSkills: InteractiveElementSkillProtocol[];

    public analyze(packet: Packet): void {
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.elementId = object.elementId;
        this.elementTypeId = object.elementTypeId;
        this.enabledSkills = object.enabledSkills;
        this.disabledSkills = object.disabledSkills;
    }
}
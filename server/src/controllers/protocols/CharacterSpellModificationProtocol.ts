import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { CharacterBaseCharacteristicProtocol } from "./CharacterBaseCharacteristicProtocol";
import { CharacterSpellModificationTypeEnum } from "../../../../enums/CharacterSpellModificationTypeEnum";

export class CharacterSpellModificationProtocol extends PacketProtocol {

    constructor() {
        super(215);
    }

    public modificationType: CharacterSpellModificationTypeEnum;
    public spellId: number;
    public characteristics: CharacterBaseCharacteristicProtocol;

    public analyze(packet: Packet): void {
        this.modificationType = BufferHelper.getSpecialNumber(packet);
        this.spellId = BufferHelper.getSpecialNumber(packet);
        this.characteristics = new CharacterBaseCharacteristicProtocol();
        this.characteristics.analyze(packet);
        console.log(this);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.modificationType = object.modificationType;
        this.spellId = object.spellId;
        this.characteristics = object.characteristics;
    }
}
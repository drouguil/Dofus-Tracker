import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { EntityLookProtocol } from "../protocols/EntityLookProtocol";
import { BreedEnum } from "../../../../enums/BreedEnum";

export class CharacterBaseInfosProtocol extends PacketProtocol {

    constructor() {
        super(45);
    }
    
    public id: number;
    public name: string;
    public level: number;
    public entityLook: EntityLookProtocol;
    public breed: BreedEnum;
    public sex: boolean;

    public analyze(packet: Packet): void {

        this.id = BufferHelper.getSpecialNumber(packet);

        this.name = BufferHelper.getText(packet);

        this.level = BufferHelper.getSpecialNumber(packet);

        this.entityLook = new EntityLookProtocol();

        this.entityLook.analyze(packet);

        this.breed = BufferHelper.getNumber(packet, 1);

        this.sex = BufferHelper.getBoolean(packet);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.id = object.id;
        this.level = object.level;
        this.name = object.name;
        this.entityLook = object.entityLook;
        this.breed = object.breed;
        this.sex = object.sex;
    }
}
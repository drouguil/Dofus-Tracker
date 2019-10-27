import { PacketProtocol } from '../PacketProtocol';
import { BreedEnum } from '../../../../enums/BreedEnum';
import { EntityLookProtocol } from './EntityLookProtocol';

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

    public parse(packetProtocol: any): void {
        this.id = packetProtocol.id;
        this.name = packetProtocol.name;
        this.level = packetProtocol.level;
        this.entityLook = packetProtocol.entityLook;
        this.breed = packetProtocol.breed;
        this.sex = packetProtocol.sex;
    }

    public analyze(): void {
        const entityLookProtocol: EntityLookProtocol = new EntityLookProtocol();
        entityLookProtocol.parse(this.entityLook);
        entityLookProtocol.analyze();
        this.entityLook = entityLookProtocol;
        // console.log(this);
    }
}

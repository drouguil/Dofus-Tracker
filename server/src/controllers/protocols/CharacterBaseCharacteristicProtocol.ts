import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class CharacterBaseCharacteristicProtocol extends PacketProtocol {

    constructor() {
        super(4);
    }

    public base: number;
    public additionnal: number;
    public objectsAndMountBonus: number;
    public alignGiftBonus: number;
    public contextModif: number;

    public analyze(packet: Packet): void {
        this.base = BufferHelper.getSpecialNumber(packet, true);
        
        this.additionnal = BufferHelper.getSpecialNumber(packet, true);
        
        this.objectsAndMountBonus = BufferHelper.getSpecialNumber(packet, true);
        
        this.alignGiftBonus = BufferHelper.getSpecialNumber(packet, true);
        
        this.contextModif = BufferHelper.getSpecialNumber(packet, true);
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.base = object.base;
        this.additionnal = object.additionnal;
        this.objectsAndMountBonus = object.objectsAndMountBonus;
        this.alignGiftBonus = object.alignGiftBonus;
        this.contextModif = object.contextModif;
    }
}
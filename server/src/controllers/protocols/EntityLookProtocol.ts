import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";
import { Color } from "../../models/game/Color";
import { SubEntityProtocol } from "../../controllers/protocols/SubEntityProtocol";

export class EntityLookProtocol extends PacketProtocol {

    constructor() {
        super(55);
    }

    public bonesId: number;
    public skins: number[];
    public indexedColors: Color[];
    public scales: number[];
    public subentities: SubEntityProtocol[];

    public analyze(packet: Packet): void {
        this.bonesId = BufferHelper.getSpecialNumber(packet);

        this.skins = BufferHelper.getNumbers(packet, 2, true);

        this.indexedColors = new Array();

        let colorsLength: number = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < colorsLength; index++) {
            let indexColor = BufferHelper.getNumber(packet, 1);
            let red = BufferHelper.getNumber(packet, 1);
            let green = BufferHelper.getNumber(packet, 1);
            let blue = BufferHelper.getNumber(packet, 1);
            let color = new Color(red, green, blue);
            this.indexedColors[indexColor] = color;
        }

        this.scales = BufferHelper.getNumbers(packet, 2, true);

        this.subentities = new Array();

        let subentitiesLength = BufferHelper.getNumber(packet, 2);

        for (let index = 0; index < subentitiesLength; index++) {
            let subentity: SubEntityProtocol = new SubEntityProtocol();
            subentity.analyze(packet);
        }
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.bonesId = object.bonesId;
        this.skins = object.skins;
        this.indexedColors = object.indexedColors;
        this.scales = object.scales;
        this.subentities = object.subentities;
    }
}
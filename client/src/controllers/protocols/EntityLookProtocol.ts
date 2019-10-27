import { PacketProtocol } from '../PacketProtocol';
import { Color } from '../../models/game/Color';
import { SubEntityProtocol } from './SubEntityProtocol';

export class EntityLookProtocol extends PacketProtocol {

    constructor() {
        super(55);
    }

    public bonesId: number;
    public skins: number[];
    public indexedColors: Color[];
    public scales: number[];
    public subentities: SubEntityProtocol[];

    public parse(packetProtocol: any): void {
        this.bonesId = packetProtocol.bonesId;
        this.skins = packetProtocol.skins;
        this.indexedColors = packetProtocol.indexedColors;
        this.scales = packetProtocol.scales;
        this.subentities = packetProtocol.subentities;
    }

    public analyze(): void {
        const subentities: SubEntityProtocol[] = new Array();
        this.subentities.forEach((protocol: SubEntityProtocol) => {
            const subEntityProtocol: SubEntityProtocol = new SubEntityProtocol();
            subEntityProtocol.parse(protocol);
            subEntityProtocol.analyze();
            subentities.push(subEntityProtocol);
        });
        this.subentities = subentities;
        // console.log(this);
    }
}

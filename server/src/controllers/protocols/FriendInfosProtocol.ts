import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PlayerStateEnum } from "../../../../enums/PlayerStateEnum";
import { PacketProtocol } from "../PacketProtocol";

export class FriendInfosProtocol extends PacketProtocol {

    constructor() {
        super(78);
    }

    public accountId: number;
    public lastConnection: number;
    public accountName: string;
    public state: PlayerStateEnum;
    public achievementPoints: number;

    public analyze(packet: Packet): void {

        this.lastConnection = BufferHelper.getNumber(packet, 4);

        this.accountName = BufferHelper.getText(packet);

        this.state = BufferHelper.getNumber(packet,1);

        this.achievementPoints = BufferHelper.getSpecialNumber(packet);

        BufferHelper.slice(packet, 11);

        console.log(this);
    }
    
    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.lastConnection = object.lastConnection;
        this.accountId = object.accountId;
        this.accountName = object.name;
        this.state = object.state;
        this.achievementPoints = object.achievementPoints;
    }
}
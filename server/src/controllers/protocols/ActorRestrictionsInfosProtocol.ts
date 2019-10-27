import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { PacketProtocol } from "../PacketProtocol";

export class ActorRestrictionsInfosProtocol extends PacketProtocol {

    constructor() {
        super(204);
    }

    public cantBeAggressed: boolean;
    public cantBeChallenged: boolean;
    public cantTrade: boolean;
    public cantBeAttackedByMutant: boolean;
    public cantRun: boolean;
    public forceSlowWalk: boolean;
    public cantMinimize: boolean;
    public cantMove: boolean;

    public cantAggress: boolean;
    public cantChallenge: boolean;
    public cantExchange: boolean;
    public cantAttack: boolean;
    public cantChat: boolean;
    public cantBeMerchant: boolean;
    public cantUseObject: boolean;
    public cantUseTaxCollector: boolean;
    
    public cantUseInteractive: boolean;
    public cantSpeakToNPC: boolean;
    public cantChangeZone: boolean;
    public cantAttackMonster: boolean;
    public cantWalk8Directions: boolean;

    public analyze(packet: Packet): void {
        let flag1: number[] = BufferHelper.getBits(packet);

        this.cantBeAggressed = flag1[0] == 0;
        this.cantBeChallenged = flag1[1] == 0;
        this.cantTrade = flag1[2] == 0;
        this.cantBeAttackedByMutant = flag1[3] == 0;
        this.cantRun = flag1[4] == 0;
        this.forceSlowWalk = flag1[5] == 0;
        this.cantMinimize = flag1[6] == 0;
        this.cantMove = flag1[7] == 0;

        let flag2: number[] = BufferHelper.getBits(packet);
        
        this.cantAggress = flag2[0] == 0;
        this.cantChallenge = flag2[1] == 0;
        this.cantExchange = flag2[2] == 0;
        this.cantAttack = flag2[3] == 0;
        this.cantChat = flag2[4] == 0;
        this.cantBeMerchant = flag2[5] == 0;
        this.cantUseObject = flag2[6] == 0;
        this.cantUseTaxCollector = flag2[7] == 0;

        let flag3: number[] = BufferHelper.getBits(packet);
        
        this.cantUseInteractive = flag3[0] == 0;
        this.cantSpeakToNPC = flag3[1] == 0;
        this.cantChangeZone = flag3[2] == 0;
        this.cantAttackMonster = flag3[3] == 0;
        this.cantWalk8Directions = flag3[4] == 0;
    }

    public parse(packetProtocol: PacketProtocol): void {
        let object: any = packetProtocol;
        this.cantBeAggressed = object.cantBeAggressed;
        this.cantBeChallenged = object.cantBeChallenged;
        this.cantTrade = object.cantTrade;
        this.cantBeAttackedByMutant = object.cantBeAttackedByMutant;
        this.cantRun = object.cantRun;
        this.forceSlowWalk = object.forceSlowWalk;
        this.cantMinimize = object.cantMinimize;
        this.cantMove = object.cantMove;
        this.cantAggress = object.cantAggress;
        this.cantChallenge = object.cantChallenge;
        this.cantExchange = object.cantExchange;
        this.cantAttack = object.cantAttack;
        this.cantChat = object.cantChat;
        this.cantBeMerchant = object.cantBeMerchant;
        this.cantUseObject = object.cantUseObject;
        this.cantUseTaxCollector = object.cantUseTaxCollector;
        this.cantUseInteractive = object.cantUseInteractive;
        this.cantSpeakToNPC = object.cantSpeakToNPC;
        this.cantChangeZone = object.cantChangeZone;
        this.cantAttackMonster = object.cantAttackMonster;
        this.cantWalk8Directions = object.cantWalk8Directions;
    }
}
import { PacketMessage } from '../controllers/PacketMessage';
import { PacketProtocol } from '../controllers/PacketProtocol';
import { IdentifiedEntityDispositionInfosProtocol } from '../controllers/protocols/IdentifiedEntityDispositionInfosProtocol';
import { GameFightMonsterInfosProtocol } from '../controllers/protocols/GameFightMonsterInfosProtocol';
import { EntityLookProtocol } from '../controllers/protocols/EntityLookProtocol';
import { GameContextActorInfosProtocol } from '../controllers/protocols/GameContextActorInfosProtocol';
import { GameFightAIInfosProtocol } from '../controllers/protocols/GameFightAIInfosProtocol';
import { GameFightFighterInfosProtocol } from '../controllers/protocols/GameFightFighterInfosProtocol';
import { SubEntityProtocol } from '../controllers/protocols/SubEntityProtocol';
import { GameFightMinimalStatsPreparationProtocol } from '../controllers/protocols/GameFightMinimalStatsPreparationProtocol';
import { CharacterBaseInfosProtocol } from '../controllers/protocols/CharacterBaseInfosProtocol';
import { GameFightCharacterInfosProtocol } from '../controllers/protocols/GameFightCharacterInfosProtocol';
import { ActorAlignmentInfosProtocol } from '../controllers/protocols/ActorAlignmentInfosProtocol';
import { GameFightFighterNamedInfosProtocol } from '../controllers/protocols/GameFightFighterNamedInfosProtocol';
import { PlayerStatusProtocol } from '../controllers/protocols/PlayerStatusProtocol';
import { GameFightMinimalStatsProtocol } from '../controllers/protocols/GameFightMinimalStatsProtocol';
import { EntityDispositionInfosProtocol } from '../controllers/protocols/EntityDispositionInfosProtocol';
import { FightEntityDispositionInfosProtocol } from '../controllers/protocols/FightEntityDispositionInfosProtocol';
import { AbstractFightDispellableEffectProtocol } from '../controllers/protocols/AbstractFightDispellableEffectProtocol';
import { FightTemporaryBoostEffectProtocol } from '../controllers/protocols/FightTemporaryBoostEffectProtocol';
import { FightTemporarySpellBoostEffectProtocol } from '../controllers/protocols/FightTemporarySpellBoostEffectProtocol';
import { FightTriggeredEffectProtocol } from '../controllers/protocols/FightTriggeredEffectProtocol';
import { FightTemporaryBoostStateEffectProtocol } from '../controllers/protocols/FightTemporaryBoostStateEffectProtocol';

class ProtocolManager {
    public protocols: typeof PacketProtocol[];

    constructor() {
        this.protocols = new Array();
        this.protocols[29] = GameFightMonsterInfosProtocol;
        this.protocols[31] = GameFightMinimalStatsProtocol;
        this.protocols[45] = CharacterBaseInfosProtocol;
        this.protocols[46] = GameFightCharacterInfosProtocol;
        this.protocols[54] = SubEntityProtocol;
        this.protocols[55] = EntityLookProtocol;
        this.protocols[60] = EntityDispositionInfosProtocol;
        this.protocols[107] = IdentifiedEntityDispositionInfosProtocol;
        this.protocols[143] = GameFightFighterInfosProtocol;
        this.protocols[150] = GameContextActorInfosProtocol;
        this.protocols[151] = GameFightAIInfosProtocol;
        this.protocols[158] = GameFightFighterNamedInfosProtocol;
        this.protocols[201] = ActorAlignmentInfosProtocol;
        this.protocols[206] = AbstractFightDispellableEffectProtocol;
        this.protocols[207] = FightTemporarySpellBoostEffectProtocol;
        this.protocols[209] = FightTemporaryBoostEffectProtocol;
        this.protocols[210] = FightTriggeredEffectProtocol;
        this.protocols[214] = FightTemporaryBoostStateEffectProtocol;
        this.protocols[217] = FightEntityDispositionInfosProtocol;
        this.protocols[360] = GameFightMinimalStatsPreparationProtocol;
        this.protocols[415] = PlayerStatusProtocol;
    }

    public analyze(protocolId: number, packetProtocol: PacketProtocol): PacketProtocol {
        const packetProtocolClass: typeof PacketProtocol = this.protocols[protocolId];
        let protocol: PacketProtocol = packetProtocol;
        if (packetProtocolClass) {
            const parseProtocol = new packetProtocolClass(protocolId);
            parseProtocol.parse(protocol);
            protocol = parseProtocol;
            protocol.analyze();
        }
        return protocol;
    }
}

export const protocolManager = new ProtocolManager();

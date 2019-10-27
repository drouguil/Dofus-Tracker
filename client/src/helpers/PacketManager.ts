import { PacketMessage } from '../controllers/PacketMessage';
import { GameFightPlacementPossiblePositionsMessage } from '../controllers/messages/GameFightPlacementPossiblePositionsMessage';
import { GameEntitiesDispositionMessage } from '../controllers/messages/GameEntitiesDispositionMessage';
import { GameFightShowFighterMessage } from '../controllers/messages/GameFightShowFighterMessage';
import { GameFightEndMessage } from '../controllers/messages/GameFightEndMessage';
import { GameFightTurnListMessage } from '../controllers/messages/GameFightTurnListMessage';
import { GameFightTurnStartMessage } from '../controllers/messages/GameFightTurnStartMessage';
import { GameFightTurnEndMessage } from '../controllers/messages/GameFightTurnEndMessage';
import { GameFightStartMessage } from '../controllers/messages/GameFightStartMessage';
import { GameMapMovementMessage } from '../controllers/messages/GameMapMovementMessage';
import { GameActionFightPointsVariationMessage } from '../controllers/messages/GameActionFightPointsVariationMessage';
import { GameFightNewRoundMessage } from '../controllers/messages/GameFightNewRoundMessage';
import { GameActionFightSpellCastMessage } from '../controllers/messages/GameActionFightSpellCastMessage';
import { GameActionFightLifePointsLostMessage } from '../controllers/messages/GameActionFightLifePointsLostMessage';
import { GameActionFightDeathMessage } from '../controllers/messages/GameActionFightDeathMessage';
import { SequenceStartMessage } from '../controllers/messages/SequenceStartMessage';
import { SequenceEndMessage } from '../controllers/messages/SequenceEndMessage';
import { GameFightStartingMessage } from '../controllers/messages/GameFightStartingMessage';
import { GameActionFightCloseCombatMessage } from '../controllers/messages/GameActionFightCloseCombatMessage';
import { GameActionFightSlideMessage } from '../controllers/messages/GameActionFightSlideMessage';
import { GameActionFightReduceDamagesMessage } from '../controllers/messages/GameActionFightReduceDamagesMessage';
import { GameActionFightTeleportOnSameMapMessage } from '../controllers/messages/GameActionFightTeleportOnSameMapMessage';
import { GameActionFightExchangePositionsMessage } from '../controllers/messages/GameActionFightExchangePositionsMessage';
import { GameActionFightLifePointsGainMessage } from '../controllers/messages/GameActionFightLifePointsGainMessage';
import { GameActionFightDispellableEffectMessage } from '../controllers/messages/GameActionFightDispellableEffectMessage';
import { GameActionFightDispellMessage } from '../controllers/messages/GameActionFightDispellMessage';
import { GameActionFightDispellSpellMessage } from '../controllers/messages/GameActionFightDispellSpellMessage';
import { GameActionFightLifeAndShieldPointsLostMessage } from '../controllers/messages/GameActionFightLifeAndShieldPointsLostMessage';
import { GameActionFightInvisibilityMessage } from '../controllers/messages/GameActionFightInvisibilityMessage';
import { GameActionFightInvisibleDetectedMessage } from '../controllers/messages/GameActionFightInvisibleDetectedMessage';
import { GameActionFightDispellEffectMessage } from '../controllers/messages/GameActionFightDispellEffectMessage';
import { GameActionFightTackledMessage } from '../controllers/messages/GameActionFightTackledMessage';
import { GameFightRefreshFighterMessage } from '../controllers/messages/GameFightRefreshFighterMessage';
import { GameActionFightSummonMessage } from '../controllers/messages/GameActionFightSummonMessage';
import { GameActionFightDodgePointLossMessage } from '../controllers/messages/GameActionFightDodgePointLossMessage';

class PacketManager {
    public packets: typeof PacketMessage[];

    constructor() {
        this.packets = new Array();
        this.packets[700] = GameFightStartingMessage;
        this.packets[703] = GameFightPlacementPossiblePositionsMessage;
        this.packets[712] = GameFightStartMessage;
        this.packets[713] = GameFightTurnListMessage;
        this.packets[714] = GameFightTurnStartMessage;
        this.packets[719] = GameFightTurnEndMessage;
        this.packets[720] = GameFightEndMessage;
        this.packets[951] = GameMapMovementMessage;
        this.packets[955] = SequenceStartMessage;
        this.packets[956] = SequenceEndMessage;
        this.packets[1004] = GameActionFightTackledMessage;
        this.packets[1010] = GameActionFightSpellCastMessage;
        this.packets[1030] = GameActionFightPointsVariationMessage;
        this.packets[1099] = GameActionFightDeathMessage;
        this.packets[5525] = GameActionFightSlideMessage;
        this.packets[5526] = GameActionFightReduceDamagesMessage;
        this.packets[5527] = GameActionFightExchangePositionsMessage;
        this.packets[5528] = GameActionFightTeleportOnSameMapMessage;
        this.packets[5533] = GameActionFightDispellMessage;
        this.packets[5696] = GameEntitiesDispositionMessage;
        this.packets[5821] = GameActionFightInvisibilityMessage;
        this.packets[5825] = GameActionFightSummonMessage;
        this.packets[5828] = GameActionFightDodgePointLossMessage;
        this.packets[5864] = GameFightShowFighterMessage;
        this.packets[6070] = GameActionFightDispellableEffectMessage;
        this.packets[6113] = GameActionFightDispellEffectMessage;
        this.packets[6116] = GameActionFightCloseCombatMessage;
        this.packets[6176] = GameActionFightDispellSpellMessage;
        this.packets[6239] = GameFightNewRoundMessage;
        this.packets[6309] = GameFightRefreshFighterMessage;
        this.packets[6310] = GameActionFightLifeAndShieldPointsLostMessage;
        this.packets[6311] = GameActionFightLifePointsGainMessage;
        this.packets[6312] = GameActionFightLifePointsLostMessage;
        this.packets[6320] = GameActionFightInvisibleDetectedMessage;
    }

    public analyze(packetId: number, packetMessage: PacketMessage): PacketMessage {
        const packetMessageClass: typeof PacketMessage = this.packets[packetId];
        let message: PacketMessage = packetMessage;
        if (packetMessageClass) {
            const parseMessage = new packetMessageClass();
            parseMessage.parse(message);
            message = parseMessage;
            message.analyze();
        }
        return message;
    }
}

export const packetManager = new PacketManager();

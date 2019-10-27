import { Entity } from '../fight/entity/Entity';
import { SequenceTypeEnum } from '../../../../enums/SequenceTypeEnum';
import { ChatMessage } from '../chat/ChatMessage';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { ChatService } from '../../app/services/chat.service';

export class Sequence {

    public chatMessages: ChatMessage[];
    public sequenceTypeEnd: SequenceTypeEnum;
    public action: ActionEnum;
    public apCost: number | undefined;
    public apLoss: number | undefined;
    public mpLoss: number | undefined;
    public isAPCost = true;

    constructor(
        public author: Entity,
        public sequenceTypeStart: SequenceTypeEnum,
        public countToLoad = 0,
        public countLoaded = 0,
        public isFinish = false
    ) {
        this.chatMessages = new Array();
    }

    analyze() {
        this.chatMessages.forEach((chatMessage: ChatMessage) => {
            chatMessage.load(this);
        });
        if (this.countToLoad === this.countLoaded) {
            this.addMessages();
        }
        this.isFinish = true;
    }

    addMessages() {
        this.chatMessages.forEach((chatMessage: ChatMessage) => {
            ChatService.instance.addMessage(chatMessage);
        });
    }
}

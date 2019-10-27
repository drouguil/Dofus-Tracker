import { MessageSocket } from "../models/messages/MessageSocket";

class MessageManager {
    public message: MessageSocket;

    constructor() { }
}

export const messageManager = new MessageManager();
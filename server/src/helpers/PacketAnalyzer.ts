import * as WebSocket from 'ws';

import { Packet } from '../models/packets/Packet';
import { MessageSocket } from '../models/messages/MessageSocket';

import { BufferHelper } from '../helpers/BufferHelper';

import { packetManager } from './PacketManager';
import { packetServerSaver } from './PacketServerSaver';
import { packetClientSaver } from './PacketClientSaver';

import { PacketMessage } from '../controllers/PacketMessage';

export class PacketAnalyzer {

    private static ws: WebSocket;
    private static isClientSaved: boolean;
    private static isServerSaved: boolean;
    private static countClient: number;
    public static packetId: number;

    public static analyze(ws: WebSocket, ret: any, data: Buffer, isTrunc: boolean): void {
        this.ws = ws;

        if (isTrunc) {
            console.log("IS TRUNC !!!");
        }

        if (ret.info.srcport == 5555) {
            if (this.isServerSaved) {
                let packet: Packet = packetServerSaver.packet;

                let isId = packet.dataLen === -1;

                packetServerSaver.add(data);

                if (isId) {
                    this.analyzePacket(packet);
                } else {
                    if (packet.data.length >= packet.dataLen) {
                        this.analyzeData(packet);
                    }
                }
            } else {
                if (data.length > 0) {
                    this.analyzePacket(new Packet(data, true));
                }
            }
        } else {
            if (this.isClientSaved) {
                let packet: Packet = packetClientSaver.packet;

                let isId = packet.dataLen === -1;

                packetClientSaver.add(data);

                if (isId) {
                    this.analyzePacket(packet);
                } else {
                    if (packet.data.length >= packet.dataLen) {
                        this.analyzeData(packet);
                    }
                }
            } else {
                if (data.length > 0) {
                    this.analyzePacket(new Packet(data, false));
                }
            }
        }
    }

    private static analyzePacket(packet: Packet): void {
        const copyPacket = Object.assign({}, packet);
        if (packet.data.length > 1) {
            packet.extractId();

            this.packetId = packet.id;

            let dataLength = BufferHelper.getDataLength(packet);

            if (!packet.isFromServer) {
                this.countClient = packet.extractCount();
            }

            if (packet.extractDataLength(dataLength)) {
                if (packet.data.length < packet.dataLen) {
                    this.save(packet);
                } else {
                    this.analyzeData(packet);
                }
            } else {
                BufferHelper.display(packet.data);
                copyPacket.dataLen = -1;
                this.save(copyPacket);
            }
        } else {
            BufferHelper.display(packet.data);
            copyPacket.dataLen = -1;
            this.save(copyPacket);
        }
    }

    private static analyzeData(packet: Packet): void {
        if (packet.isFromServer) {
            this.isServerSaved = false;
        } else {
            this.isClientSaved = false;
        }

        let packetMessage: PacketMessage = packetManager.analyze(packet.id, packet);

        console.log(
            packet.isFromServer,
            "Action Id : " + packet.id,
            "Buffer Length : " + packet.data.length,
            "Data Length : " + packet.dataLen
        );

        if (packetMessage) {
            this.sendMessage(packet, packetMessage);
        } else {
            packet.data = packet.data.slice(packet.dataLen);
        }

        if (packet.data.length > 0) {
            this.analyzePacket(packet);
        }
    }

    private static sendMessage(packet: Packet, packetMessage: PacketMessage): void {
        let sender: string = 'C';
        if (packet.isFromServer) {
            sender = 'S';
        }
        let message: MessageSocket = new MessageSocket(sender);
        message.packetId = packet.id;
        message.packetMessage = packetMessage;
        message.countClient = this.countClient;
        this.ws.send(JSON.stringify(message));
    }

    private static save(packet: Packet) {
        if (packet.isFromServer) {
            this.isServerSaved = true;
            packetServerSaver.save(packet);
        } else {
            this.isClientSaved = true;
            packetClientSaver.save(packet);
        }
    }
}
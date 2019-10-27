import { Packet } from '../models/packets/Packet';

export class BufferHelper {

    public static getPacketId(packet: Packet): number {
        return packet.data.readUIntBE(0, 2) >> 2;
    }

    public static getDataLength(packet: Packet): number {
        let dataLength = packet.data.readUIntBE(0, 2) & 3;
        packet.data = packet.data.slice(2);
        return dataLength;
    }

    public static getNumber(packet: Packet, indexEnd: number, isSigned: boolean = false): number {
        let result: number;
        if (isSigned) {
            result = packet.data.readIntBE(0, indexEnd);
        }
        else {
            result = packet.data.readUIntBE(0, indexEnd);
        }
        packet.data = packet.data.slice(indexEnd);
        return result;
    }

    public static getSpecialNumber(packet: Packet, isSigned: boolean = false): number {
        let result: number;
        let value: number = 0;
        let power: number = 0;
        do {
            value = this.getNumber(packet, 1);
            if (power > 0) {
                result += (value - 1) * Math.pow(128, power);
            } else {
                result = value * Math.pow(128, power)
            }
            power++;
        } while (value > 127);
        if (isSigned && result >= 32768) {
            result -= 65536;
        }
        return result;
    }

    public static getText(packet: Packet, bytesLength: number = 2): string {
        let result: string;
        let length = this.getNumber(packet, bytesLength);
        result = packet.data.toString('utf8', 0, length);
        packet.data = packet.data.slice(length);
        return result;
    }

    public static getNumbers(packet: Packet, bytesLength: number = 2, isSpecial: boolean = false): number[] {
        let result: number[] = new Array();
        let length: number;

        if (bytesLength == 0) {
            length = this.getSpecialNumber(packet);
        }
        else {
            length = this.getNumber(packet, bytesLength);
        }

        for (let index = 0; index < length; index++) {
            let numb: number;
            if (isSpecial) {
                numb = this.getSpecialNumber(packet);
            }
            else {
                numb = this.getNumber(packet, 1);
            }
            result.push(numb);
        }

        return result;
    }
    
    public static getBoolean(packet: Packet): boolean {
        return this.getNumber(packet, 1) != 0;
    }

    public static getId8(packet: Packet): number {
        return this.getNumber(packet, 8);
    }

    public static getBits(packet: Packet, length: number = 1): number[] {
        let bits = new Array();
        let byte: string = this.getNumber(packet, length).toString(2);
        for (let index = 0; index < byte.length; index++) {
            let bit: number = parseInt(byte[0]);
            bits.push(bit);
        }
        return bits;
    }

    public static display(buffer: Buffer, length: number = buffer.length): void {
        let result: string = "";
        for (let index = 0; index < length; index++) {
            result += buffer[index] + " ";
        }
        console.log("\nBuffer (" + buffer.length + ") : ", result, "\n");
    }

    public static slice(packet: Packet, index: number): void {
        packet.data = packet.data.slice(index);
    }

    public static debug(packet: Packet): void {

        this.display(packet.data, packet.dataLen);

        this.slice(packet, packet.dataLen);
    }
}
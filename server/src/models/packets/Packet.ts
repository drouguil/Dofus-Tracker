import { BufferHelper } from "../../helpers/BufferHelper";

export class Packet {
    public id: number;
    public dataLen: number;

    constructor(
        public data: Buffer,
        public isFromServer: boolean
    ) { }

    public extractCount(): number {
        let count: number;
        if (this.data.length >= 4) {
            count = BufferHelper.getNumber(this, 4);
        } else {
            console.log("Can't extract count !");
        }
        return count;
    }

    public extractDataLength(nbBytes: number): boolean {
        let isExtract = false;

        if (this.data.length >= nbBytes) {
            this.dataLen = BufferHelper.getNumber(this, nbBytes);
            if (!this.dataLen) {
                this.dataLen = 0;
            }
            isExtract = true;
        }

        return isExtract;
    }

    public extractId(): void {
        this.id = BufferHelper.getPacketId(this);
    }
}
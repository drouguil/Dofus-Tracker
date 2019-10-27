export class PacketProtocol {

    constructor(public protocolId: number) { }

    public parse(packetProtocol: PacketProtocol): void {
        throw new Error('Method not implemented.');
    }

    public analyze(): void {
        throw new Error('Method not implemented.');
    }

}

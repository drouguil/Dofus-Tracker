import { Address } from './Address';

export class Device {
    constructor(
        public addresses: Address[],
        public name: string,
        public description: string
    ) {}
}

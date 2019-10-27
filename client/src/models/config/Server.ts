import { CommunityEnum } from '../../../../enums/CommunityEnum';

export class Server {
    constructor(
        public id: number,
        public name: string,
        public community: CommunityEnum,
        public ip: string
    ) {}
}

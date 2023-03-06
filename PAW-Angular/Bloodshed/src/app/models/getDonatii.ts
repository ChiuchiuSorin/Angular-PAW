import { Time } from "@angular/common";

export class GetDonatii {
    constructor(
        public id: number,
        public userId: number,
        public observations: string,
        public status: string,
        public data: String,
        public time: String
    ) {}
}
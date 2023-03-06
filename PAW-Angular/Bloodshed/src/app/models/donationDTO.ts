export class DonationDTO {
    constructor(
        public user_id: number,
        public status: string,
        public observations: string,
        public date: Date,
        public time: string
    ) {}
}
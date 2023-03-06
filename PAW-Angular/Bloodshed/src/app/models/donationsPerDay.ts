import { Donation } from "./donation";

export class DonationsPerDay {
    constructor(
        public day: String,
        public hours: Donation[]
    ) {}
}

export class UserDetails {
    constructor(
        public nume: string,
        public prenume: string,
        public data_nasterii: Date,
        public grupaSange: string,
        public telefon: string,
        public inaltime: number,
        public greutate: number,
        public email?: string
    ) {}
}
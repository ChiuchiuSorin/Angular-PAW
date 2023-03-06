import { RoleInputDTO } from "./role-input-dto";
import { UserDetails } from "./user-details";

export class UserDto {
    constructor(
        public username: string,
        public password: string,
        public infoUserDTO: UserDetails,
        public roles: RoleInputDTO[]
    ) {}
}
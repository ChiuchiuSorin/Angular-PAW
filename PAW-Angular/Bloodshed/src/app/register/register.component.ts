import { Component, OnInit } from '@angular/core';
import { RoleInputDTO } from '../models/role-input-dto';
import { User } from '../models/user';
import { UserDetails } from '../models/user-details';
import { UserDto } from '../models/userDto';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User("", "");
  userDetails: UserDetails = new UserDetails("", "", undefined, "", "", undefined, undefined, undefined);

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
  }

  public register() {
      let roles : RoleInputDTO[] = [ new RoleInputDTO("basic_user") ];
      let userDto = new UserDto(this.user.username, this.user.password, this.userDetails, roles);
      this.requestsService.registerUser(userDto).subscribe ({
        next: (data) => {
          console.log(data);
        },
        error: (errorMessage) => {
          console.log(errorMessage);
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../models/user-details';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails: UserDetails = new UserDetails("", "", new Date(0, 0, 0), "", "", 0, 0, "");
  
  constructor(private requestsService: RequestsService, private router: Router) { }

  ngOnInit(): void {
    if(this.requestsService.isJwtClear()) {
      this.router.navigate( ["/despre-noi"] );
    }

    // cerere pt userul cu id-ul salvat in requestsService
    this.requestsService.getUserById().subscribe({
      next: (data) => {
        let data_nasterii = data.infoUser.data_nasterii;
        let splitted = data_nasterii.split("-", 3);
        let an = splitted[0];
        let luna = splitted[1];
        if(luna[0] === '0') luna = luna.substring(1);
        let zi = splitted[2];
        if(zi[0] === '0') zi = zi.substring(1);
        let infoUser = data.infoUser;
        this.userDetails = new UserDetails(infoUser.nume, infoUser.prenume, new Date(an, luna, parseInt(zi) + 1), 
          infoUser.grupaSange, infoUser.telefon, infoUser.inaltime, infoUser.greutate, infoUser.email);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }

}

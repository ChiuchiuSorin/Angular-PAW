import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RequestsService } from '../services/requests.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private jwtHelper = new JwtHelperService();

  constructor(private requestsService: RequestsService, private router: Router) { }

  ngOnInit(): void {
  }

  /*
      Cand dau login, se trimite o cerere catre backend care imi va returna userDetails in caz de succes. Va trebui sa setez aceste informatii
      in componenta de user-profile ca sa pot afisa acolo informatiile. Probabil voi face aceasta transmitere printr-un serviciu (pentru ca 
      sunt 2 componente separate care nu au nicio legatura intre ele; pot comunica doar printr-un serviciu)
  */
  public login(username: string, password: string) {
    let user: User = new User(username, password);

    this.requestsService.login(user).subscribe({
      next: (data) => {
        console.log(data);
        let decodedJws = this.jwtHelper.decodeToken(data.loginToken);
        this.requestsService.setJwtForAuthorization(data.loginToken);
        this.requestsService.setUserId(decodedJws.sub);
        this.requestsService.sendLoggedEvent(true);
        this.router.navigate( ["/despre-noi"] );
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged = false;

  constructor(public requestsService: RequestsService, private router: Router) { }

  ngOnInit(): void {
    this.receiveLoggedEvent();
  }

  logout() {
    this.requestsService.sendLoggedEvent(false);
    this.router.navigate( ["/login"] );
  }

  private receiveLoggedEvent() {
    this.requestsService.loggedEvent.subscribe(response => {
      this.logged = response;
    });
  }
}

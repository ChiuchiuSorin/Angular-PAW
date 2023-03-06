import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Donation } from '../models/donation';
import { RequestsService } from '../services/requests.service';

var userDonations: Donation[] = [
  new Donation(
    new Date(2022, 10, 12, 12, 30, 30),
    "Succes"
  ),
  new Donation(
    new Date(2022, 8, 15, 11, 40, 30),
    "Respins"
  ),
  new Donation(
    new Date(2022, 6, 18, 9, 0, 30),
    "Succes"
  ),
  new Donation(
    new Date(2022, 4, 12, 13, 30, 30),
    "Succes"
  ),
  new Donation(
    new Date(2022, 1, 12, 11, 30, 30),
    "Respins"
  ),
  new Donation(
    new Date(2022, 1, 2, 10, 0, 30),
    "Succes"
  )
];

@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.component.html',
  styleUrls: ['./donation-history.component.css']
})
export class DonationHistoryComponent implements OnInit {

  dataSource: MatTableDataSource<Donation>
  displayedColumns = ["no", "date", "time", "status"];

  @ViewChild('paginator') paginator: MatPaginator

  constructor(private requestsService: RequestsService, private router: Router) { }


  ngOnInit(): void {
    if(this.requestsService.isJwtClear()) {
      this.router.navigate( ["/despre-noi"] );
    }

    this.requestsService.getDonationsByUserId().subscribe({
      next: (data) => {
        userDonations = [];

        data.forEach(
          (date: { data: string; time: string; status: string; }) => {
            let d = date.data.split("-")
            let t = date.time.split(":")
            userDonations.push(new Donation(new Date(parseInt(d[0]),parseInt(d[1]),parseInt(d[2]) + 1,parseInt(t[0]),parseInt(t[1]),parseInt(t[2])), date.status))
          }
        )
        this.dataSource = new MatTableDataSource(userDonations);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

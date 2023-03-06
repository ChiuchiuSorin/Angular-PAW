import { Component, OnInit } from '@angular/core';
import { Statistic } from '../models/statistic';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public ageStats: Statistic[] = [];
  public bloodTypeStats: Statistic[] = [];
  public donationStatusStats: Statistic[] = [];

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.getAgeStatistics();
    this.getBloodTypeStatistics();
    this.getDonationStatusStatistics();
  }

  getAgeStatistics() {
    this.requestsService.getAgeStatistics().subscribe({
      next: (data) => {
        this.ageStats = [];

        data.forEach((element: any) => {
          let name = element.name;
          let nr = parseInt(element.number);
          let percentage = parseFloat(element.percentage.toFixed(2));
          this.ageStats.push(new Statistic(name, nr, percentage));
        });
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }

  getBloodTypeStatistics() {
    this.requestsService.getBloodTypeStatistics().subscribe({
      next: (data) => {
        this.bloodTypeStats = [];

        data.forEach((element: any) => {
          let name = element.name;
          let nr = parseInt(element.number);
          let percentage = parseFloat(element.percentage.toFixed(2));
          this.bloodTypeStats.push(new Statistic(name, nr, percentage));
        });
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }

  getDonationStatusStatistics() {
    this.requestsService.getDonationStatusStatistics().subscribe({
      next: (data) => {
        this.donationStatusStats = [];

        data.forEach((element: any) => {
          let name = element.name;
          let nr = parseInt(element.number);
          let percentage = parseFloat(element.percentage.toFixed(2));
          this.donationStatusStats.push(new Statistic(name, nr, percentage));
        });
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }

}

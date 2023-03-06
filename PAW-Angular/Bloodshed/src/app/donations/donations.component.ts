import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { Donation } from '../models/donation';
import { GetDonatii } from '../models/getDonatii';
import { DonationsPerDay } from '../models/donationsPerDay';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonationDialogComponent } from '../donation-dialog/donation-dialog.component'
import { RequestsService } from '../services/requests.service';
import {NgToastModule, NgToastService} from 'ng-angular-popup';
import { Router } from '@angular/router';


const reservedDonations: Donation[] = [
  
]


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  providers: [DatePipe]
})

export class DonationsComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  monday = new Date();
  displayedColumns = ["date", "day",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h7",
    "h8",
    "h9",
    "h10",
    "h11",
    "h12"
  ]
  hoursInterval = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h7",
    "h8",
    "h9",
    "h10",
    "h11",
    "h12"
  ]
  dataSource: MatTableDataSource<any>
  allDonationDates: DonationsPerDay[] = []


  constructor(public dialog: MatDialog, 
    private requestsService: RequestsService,
    private toast: NgToastService,
    private router: Router) {
    this.monday = this.getMonday(this.monday);

  }

  aux2 : GetDonatii[];

  ngOnInit(): void {
    if(this.requestsService.isJwtClear()) {
      this.router.navigate( ["/despre-noi"] );
    }

    this.validateDates()
    // var aux = this.allDonationDates.reduce((acc, { day, hours }) =>
    //   ([...acc, { day, ...hours }]), [])
    // console.log("aux: ")
    // console.log(aux[0][1])
    // this.dataSource = new MatTableDataSource(aux);
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  validateDates(){
    this.requestsService.getReservedDates().subscribe(
      data => {
        console.log(data)
       
        data.forEach(
          date => {
            let d = date.data.split("-")
            let t = date.time.split(":")
            // console.log(new Date(parseInt(d[0]),parseInt(d[1]),parseInt(d[2]),parseInt(t[0]),parseInt(t[1]),parseInt(t[2])))
            reservedDonations.push(new Donation(new Date(parseInt(d[0]),parseInt(d[1])-1,parseInt(d[2]) + 1,parseInt(t[0]),parseInt(t[1]),parseInt(t[2])), date.status))
          }
        )
        
        console.log(reservedDonations)
        this.generateDates(reservedDonations)
        var aux = this.allDonationDates.reduce((acc, { day, hours }) =>
          ([...acc, { day, ...hours }]), [])
        console.log("aux: ")
        console.log(aux[0][1])
        this.dataSource = new MatTableDataSource(aux);
      }
    )
    this.generateDates(reservedDonations)
  }

  generateDates(reservedDonations: Donation[]) {
    this.allDonationDates = []
    var aux = reservedDonations.filter(d => d.status == "rezervat");
    var reservedDates = reservedDonations.map(d => d.date);
    var numOfWeeks = 5;
    var index = 0;
    var numDays = 0;

    while (index < numOfWeeks * 7) {
      // console.log("index: " + index)
      // console.log("index % 5: " + index % 5)
      // console.log("index after % 5: " + index)
      // console.log(index)
      var aux2 = new Date(this.monday);
      aux2.setDate(this.monday.getDate() + index)

      if (!aux2.toDateString().includes("Sat")
        && !aux2.toDateString().includes("Sun")) {
        var d: Donation[] = []
        this.allDonationDates.push(new DonationsPerDay(aux2.toLocaleString('en-us', { weekday: 'long' }), d))
        // console.log(this.allDonationDates)

        for (var i in hours2) {
          var dayOfWeek = new Date(aux2)
          dayOfWeek.setHours(hours2[i].h, hours2[i].m, 0)

          var date = reservedDates.find(date =>
            date.toDateString() == dayOfWeek.toDateString() &&
            date.getHours() == dayOfWeek.getHours() &&
            date.getMinutes() == dayOfWeek.getMinutes())
          console.log(date)

          if (date != undefined ||
            dayOfWeek.getDate() < new Date().getDate() &&
            dayOfWeek.getMonth() == new Date().getMonth()) {

            this.allDonationDates[numDays].hours.push(new Donation(dayOfWeek, "unavailable"))
          }
          else {
            if (dayOfWeek.toDateString() === new Date().toDateString()) {
              if (dayOfWeek.getHours() < new Date().getHours()) {
                this.allDonationDates[numDays].hours.push(new Donation(dayOfWeek, "unavailable"))
              }
              else if (dayOfWeek.getHours() == new Date().getHours() &&
                dayOfWeek.getMinutes() - new Date().getMinutes() < 20) {
                this.allDonationDates[numDays].hours.push(new Donation(dayOfWeek, "unavailable"))
              }
              else {
                this.allDonationDates[numDays].hours.push(new Donation(dayOfWeek, "available"))
              }
            }
            else {
              this.allDonationDates[numDays].hours.push(new Donation(dayOfWeek, "available"))
            }
          }

        }
        numDays += 1
      }
      index += 1
    }
    console.log(this.allDonationDates);
  }

  reserveDate: boolean
  reserve(date: Donation) {
    if(this.requestsService.getUserId() != -1){
    const dialogRef = this.dialog.open(DonationDialogComponent, {
      width: '300px',
      data: { date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reserveDate = result;
      if (this.reserveDate) {
        console.log("a rezervat")
        date.status = "unavailable"
      }
      else {
        console.log("nu a rezervat")
      }

    });
  }
  else{
    this.toast.info({detail:"Utilizator nelogat", 
    summary:"Apreciem entuziasmul, dar inainte de a dona trebuie sa te inregistrezi", duration:5000})
  }
   
  }

  getMonday = (d: any) => {
    const dt = new Date(d);
    const day = dt.getDay();
    const diff = dt.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(dt.setDate(diff));
  }
}
var hours2 = [
  {
    h: 8,
    m: 0
  },
  {
    h: 8,
    m: 30
  },
  {
    h: 9,
    m: 0
  },
  {
    h: 9,
    m: 30
  },
  {
    h: 10,
    m: 0
  },
  {
    h: 10,
    m: 30
  },
  {
    h: 11,
    m: 30
  },
  {
    h: 12,
    m: 0
  },
  {
    h: 12,
    m: 30
  },
  {
    h: 13,
    m: 0
  },
  {
    h: 13,
    m: 30
  },
  {
    h: 14,
    m: 0
  }
];
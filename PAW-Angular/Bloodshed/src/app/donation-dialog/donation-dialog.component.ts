import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DonationDTO } from '../models/donationDTO';
import { User } from '../models/user';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-donation-dialog',
  templateUrl: './donation-dialog.component.html',
  styleUrls: ['./donation-dialog.component.css']
})
export class DonationDialogComponent implements OnInit {

  private jwtHelper = new JwtHelperService();

  constructor(
    public dialogRef: MatDialogRef<DonationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requestsService: RequestsService) { }

  ngOnInit(): void {
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onAccept() {
    console.log(this.data.date.date)
    let d = this.data.date.date
    let time = d.getHours() + ":" + d.getMinutes() + ":00"
    let reservation = new DonationDTO(this.requestsService.getUserId(),
    "rezervat", "", d, time)
    console.log(reservation)
    this.requestsService.reserveDate(reservation).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      }
    });
  }
}

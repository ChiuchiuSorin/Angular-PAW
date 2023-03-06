import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { HomeAdviceComponent } from './home-advice/home-advice.component';
import { HomeAboutusComponent } from './home-aboutus/home-aboutus.component';
import { HomeEtapeComponent } from './home-etape/home-etape.component';
import { DonationsComponent } from './donations/donations.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatListModule } from '@angular/material/list';
import { RewardsComponent } from './rewards/rewards.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DonationHistoryComponent } from './donation-history/donation-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from "@angular/material/dialog";
import { DonationDialogComponent } from './donation-dialog/donation-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgToastModule, NgToastService} from 'ng-angular-popup';

const materials =
  [MatMenuModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    NgToastModule,
    MatTabsModule
  ]

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    HomeAdviceComponent,
    HomeAboutusComponent,
    HomeEtapeComponent,
    DonationsComponent,
    StatisticsComponent,
    UserProfileComponent,
    RewardsComponent,
    DonationHistoryComponent,
    DonationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

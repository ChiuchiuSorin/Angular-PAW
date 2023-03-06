import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAboutusComponent } from './home-aboutus/home-aboutus.component';
import { HomeAdviceComponent } from './home-advice/home-advice.component';
import { HomeEtapeComponent } from './home-etape/home-etape.component';
import { DonationsComponent } from './donations/donations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RewardsComponent } from './rewards/rewards.component';
import { DonationHistoryComponent } from './donation-history/donation-history.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'despre-noi', pathMatch: 'full' },
  { path: 'despre-noi', component: HomeAboutusComponent },
  { path: 'sfatul-medicului/:id', component: HomeAdviceComponent },
  { path: 'proces', component: HomeEtapeComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'rewards', component: RewardsComponent},
  { path: 'donation-history', component: DonationHistoryComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeAboutusComponent,
  HomeAdviceComponent,
  HomeEtapeComponent,
  DonationsComponent,
  LoginComponent,
  RegisterComponent,
  UserProfileComponent,
  RewardsComponent,
  DonationHistoryComponent
];

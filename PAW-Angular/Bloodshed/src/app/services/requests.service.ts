import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DonationDTO } from '../models/donationDTO';
import { GetDonatii } from '../models/getDonatii';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private jwt = "";
  private userId = -1;
  private backendServerIp = "http://localhost:8080"

  public loggedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private http: HttpClient) { }

  registerUser(userDto: UserDto): Observable<any> {
    let registerURL = this.backendServerIp + "/api/users/";
    return this.http.post<any>(registerURL, userDto)
                      .pipe(catchError(this.handleError));
  }

  login(user: User): Observable<any> {
    let registerURL = this.backendServerIp + "/api/authentication/login";
    return this.http.post<any>(registerURL, user)
                      .pipe(catchError(this.handleError));
  }

  getReservedDates():Observable<GetDonatii[]>{
    let registerURL = this.backendServerIp + "/api/donations/";
    return this.http.get<GetDonatii[]>(registerURL);
  }

  reserveDate(reservation: DonationDTO): Observable<any> {
    let registerURL = this.backendServerIp + "/api/donations/";
    return this.http.post<any>(registerURL, reservation)
                      .pipe(catchError(this.handleError));
  }

  getUserById(): Observable<any> {
    let url = this.backendServerIp + "/api/users/" + this.userId + "?field=id";
    return this.http.get<any>(url, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwt })})
                      .pipe(catchError(this.handleError));
  }

  getDonationsByUserId(): Observable<any> {
    let url = this.backendServerIp + "/api/donations/user/" + this.userId;
    return this.http.get<any>(url, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwt })})
                      .pipe(catchError(this.handleError));
  }

  getAgeStatistics(): Observable<any> {
    let url = this.backendServerIp + "/api/statistics/age";
    return this.http.get<any>(url, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwt })})
                      .pipe(catchError(this.handleError));
  }

  getBloodTypeStatistics(): Observable<any> {
    let url = this.backendServerIp + "/api/statistics/bloodtype";
    return this.http.get<any>(url, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwt })})
                      .pipe(catchError(this.handleError));
  }

  getDonationStatusStatistics(): Observable<any> {
    let url = this.backendServerIp + "/api/statistics/donationstatus";
    return this.http.get<any>(url, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwt })})
                      .pipe(catchError(this.handleError));
  }

  handleError(response: any) {
    let errorMessage = response.error.message;
    return throwError(() => errorMessage);
  }

  setJwtForAuthorization(jwt: string) {
    this.jwt = jwt;
  }

  clearJwt() {
    this.jwt = "";
  }

  isJwtClear() {
    return this.jwt === "";
  }

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId():number{
    return this.userId
  }

  clearUserId() {
    this.userId = -1;
  }

  sendLoggedEvent(loggedIn: boolean) {
    this.loggedEvent.emit(loggedIn);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './model/user.model';
import { Router } from '@angular/router';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../shared/services/error-handling.service';
@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationSetupService {

  baseurl = environment.baseUrl;
  private flagLogin = new Subject<boolean>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }

  registerUser(user): Observable<User> {
    const url = this.baseurl + 'user-details/';
    return this.http.post<User>(url, user)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }
  LoginUser(username, password): Observable<User> {
    const url = this.baseurl + 'user-details?' + 'user_name=' + username + '&password=' + password;
    return this.http.get<User>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  Logout(): any{
    localStorage.clear();
  }
  sendData(islogin: boolean): any {
    this.flagLogin.next(islogin);
  }

  getData(): Observable<boolean> {
    return this.flagLogin.asObservable();
  }
}

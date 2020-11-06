import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  error: '';
  errorMessage = '';
  constructor() { }
  handleError(error): Observable<never> {
    if (error.error instanceof ErrorEvent) {
        // client-side error
        this.error = error.error.message;
        this.errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        this.error = error.message;
        this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error);
    return throwError(this.errorMessage);
  }
}

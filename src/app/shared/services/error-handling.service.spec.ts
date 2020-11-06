import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorHandlingService } from './error-handling.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('ErrorHandlingService', () => {
  let service: ErrorHandlingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [ErrorHandlingService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ErrorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call handleError and return error msg', () => {
    const spy = spyOn(console, 'log');
    const error: Error = new Error('ERROR');
    service.handleError(error);
    expect(spy).toHaveBeenCalledWith(error);
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { LoginRegistrationSetupService } from './login-registration-setup.service';
import { ErrorHandlingService } from '../shared/services/error-handling.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginRegistrationSetupService', () => {
  let service: LoginRegistrationSetupService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginRegistrationSetupService, ErrorHandlingService]
    });
    service = TestBed.inject(LoginRegistrationSetupService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should test http client get for user details', () => {
    const saveData =  {
      userId: '1',
      userName: 'use2',
      password: '123'
    };

    service.registerUser(saveData).subscribe((post) => {
      expect(saveData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/user-details/');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should test http client get for Login User details', () => {
    const saveData =  {
      userId: '1',
      userName: 'user2',
      password: '123'
    };

    service.LoginUser(saveData.userName, saveData.password).subscribe((post) => {
      expect(saveData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/user-details?user_name=user2&password=123');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should call logout', () => {
    service.Logout();
    expect(localStorage.getItem('user')).toBeNull();
  });
});

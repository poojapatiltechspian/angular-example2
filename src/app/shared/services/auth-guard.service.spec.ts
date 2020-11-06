import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { Router} from '@angular/router';
describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuardService]
    });
    service = TestBed.inject(AuthGuardService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return true if local storage is not null', () => {
    if (spyOn(localStorage, 'getItem') !== null) {
      expect(service.canActivate()).toBeTruthy();
    }
  });
  it('should be return false if local storage is null', () => {
    spyOn(router, 'navigate');
    service.canActivate();
    if (localStorage.getItem('user') === null) {
      expect(router.navigate).toHaveBeenCalledWith(['/home']);
      expect(service.canActivate()).toBeFalsy();
    }
  });
});

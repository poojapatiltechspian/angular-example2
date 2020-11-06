import { fakeAsync, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
import { of } from 'rxjs';
import { Router} from '@angular/router';
describe('LoginComponent', () => {
  let fixture: any;
  let component;
  let service: LoginRegistrationSetupService;
  window.alert = jest.fn();
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [LoginRegistrationSetupService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginRegistrationSetupService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check form feilds', () => {
    const loginForm = {
                user_name:  '',
                password: ''
              };
    expect(component.LoginForm.value).toEqual(loginForm);
  });
  it('should invalidate form', () => {
    component.LoginForm.controls.user_name.setValue('');
    component.LoginForm.controls.password.setValue('');
    expect(component.LoginForm.valid).toBeFalsy();
  });
  it('should Min Max length invalidate form', () => {
    component.LoginForm.controls.user_name.setValue('x');
    component.LoginForm.controls.password.setValue('x');
    expect(component.LoginForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.LoginForm.controls.user_name.setValue('user');
    component.LoginForm.controls.password.setValue('1234');
    expect(component.LoginForm.valid).toBeTruthy();
  });

  it('should call LoginUser and return empty array', fakeAsync(() => {
    const loginForm = {
      user_name:  '',
      password: ''
    };
    spyOn(service, 'LoginUser').and.returnValue(of([]));
    spyOn(window, 'alert');
    component.onSubmit(loginForm);
    expect(window.alert).toHaveBeenCalledWith('User is not register!');
  }));

  it('should call LoginUser and return user array', fakeAsync(() => {
    const loginForm = {
      user_name:  'user2',
      password: '123'
    };
    const RecivedloginForm = [ {user_name: 'user2', password: '123', confirm_password: '123', id: '_ruzhpi'}];
    const spy = spyOn(service, 'LoginUser').and.returnValue(of(RecivedloginForm));
    spyOn(window, 'alert');
    spyOn(router, 'navigate');
    component.onSubmit(loginForm);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  }));
});


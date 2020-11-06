import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
import { UserRegistrationComponent } from './user-registration.component';
import { of } from 'rxjs';
import { Router} from '@angular/router';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let service: LoginRegistrationSetupService;
  let router: Router;
  window.alert = jest.fn();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ UserRegistrationComponent ],
      providers: [LoginRegistrationSetupService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    service =  TestBed.inject(LoginRegistrationSetupService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check form feilds', () => {
    const RegistrationForm = {
                user_name:  '',
                password: '',
                confirm_password: ''
              };
    expect(component.RegistrationForm.value).toEqual(RegistrationForm);
  });
  it('should invalidate form', () => {
    component.RegistrationForm.controls.user_name.setValue('');
    component.RegistrationForm.controls.password.setValue('');
    component.RegistrationForm.controls.confirm_password.setValue('');
    expect(component.RegistrationForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.RegistrationForm.controls.user_name.setValue('user');
    component.RegistrationForm.controls.password.setValue('1234');
    component.RegistrationForm.controls.confirm_password.setValue('1234');
    expect(component.RegistrationForm.valid).toBeTruthy();
  });

  it('should call onSubmit and return success', () => {
    component.RegistrationForm.controls.user_name.setValue('user');
    component.RegistrationForm.controls.password.setValue('1234');
    component.RegistrationForm.controls.confirm_password.setValue('1234');
    const Form = {
      user_name:  'user2',
      password: '123'
    };
    if (component.RegistrationForm.value.password === component.RegistrationForm.value.confirm_password) {
      spyOn(service, 'registerUser').and.returnValue(of(Form));
      spyOn(window, 'alert');
      spyOn(router, 'navigate');
      component.onSubmit();
      expect(router.navigate).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/user/login']);
      expect(window.alert).toHaveBeenCalledWith('User registered successfully!');
    }
  });
  it('should call onSubmit and return error', () => {
    component.RegistrationForm.controls.user_name.setValue('user');
    component.RegistrationForm.controls.password.setValue('12');
    component.RegistrationForm.controls.confirm_password.setValue('1234');
    if (component.RegistrationForm.value.password !== component.RegistrationForm.value.confirm_password) {
      spyOn(window, 'alert');
      component.onSubmit();
      expect(window.alert).toHaveBeenCalledWith('Password and confirm password not maching!');
    }
  });
});

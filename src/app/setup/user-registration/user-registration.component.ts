import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  RegistrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginRegistrationSetupService: LoginRegistrationSetupService,
    private router: Router
) { }

  ngOnInit(): void {
    this.createForm();

  }
  createForm(): void{
    this.RegistrationForm = this.fb.group({
      user_name:  ['', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      confirm_password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
    });
  }
  onSubmit(): void {
    if (this.RegistrationForm.value.password === this.RegistrationForm.value.confirm_password) {
      const user = {
        user_name: this.RegistrationForm.value.uname,
        password: this.RegistrationForm.value.password,
      };
      this.loginRegistrationSetupService.registerUser(user).subscribe((data) => {
        alert('User registered successfully!');
        this.router.navigate(['/user/login']);
      });
    }else {
      alert('Password and confirm password not maching!');
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SetupRoutingModule } from './setup-routing.module';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [LoginComponent, UserRegistrationComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SetupModule { }

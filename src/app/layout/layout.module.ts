import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterComponent } from './footer/footer.component';
// import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [
        ButtonComponent,
        HeaderComponent,
        HeaderTopComponent,
        FooterComponent,
        // LayoutComponent
    ],
  imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
    ],
  exports: [
        ButtonComponent,
        HeaderComponent,
        HeaderTopComponent,
        FooterComponent
        // LayoutComponent
    ]
})
export class LayoutModule { }

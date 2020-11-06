import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CrudOprationsRoutingModule } from './crud-oprations-routing.module';
import { ProductsCrudOprationComponent } from './products-crud-opration/products-crud-opration.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ProductsCrudOprationComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CrudOprationsRoutingModule
  ]
})
export class CrudOprationsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { Store } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductModule } from './product/products.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { IndiviualProductComponent } from './dashboard/indiviual-product/indiviual-product.component';
import { IndiviualProductCardComponent } from './dashboard/indiviual-product-card/indiviual-product-card.component';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { BannerDashbordComponent } from './dashboard/banner-dashbord/banner-dashbord.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    DashboardCardComponent,
    IndiviualProductComponent,
    IndiviualProductCardComponent,
    BannerDashbordComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ProductModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [CommonService, Store],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent  } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndiviualProductComponent } from './dashboard/indiviual-product/indiviual-product.component';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';
export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
      },
      {
        path: 'user',
        loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)
      },
      {
        path: 'crud-opration',
        loadChildren: () => import('./crud-oprations/crud-oprations.module').then(m => m.CrudOprationsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'ngrx-crud-opration',
        loadChildren: () => import('./product/products.module').then(m => m.ProductModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'product/:id',
        component: IndiviualProductComponent,
      },
    ]
  },

  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

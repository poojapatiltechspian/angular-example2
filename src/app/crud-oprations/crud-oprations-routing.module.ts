import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsCrudOprationComponent } from './products-crud-opration/products-crud-opration.component';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'product',
    component: ProductsCrudOprationComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudOprationsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'edit-product/:id',
        component: AddProductComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'product-list',
        component: ProductListComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

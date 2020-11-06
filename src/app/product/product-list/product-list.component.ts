import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as formActions from '../store/product.actions';
import { Product } from '../store/product.model';
import { Observable } from 'rxjs';
import { selectProduct } from '../store/product.selecters';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productList$: Observable<Product[]>;
  constructor(
  private store: Store,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(formActions.loadProducts());
    this.getLinks();
  }
  getLinks(): void {
    this.productList$ = this.store.pipe(select(selectProduct));
  }
  edit(id): void{
    this.router.navigate(['./ngrx-crud-opration/edit-product/', id]);
  }
  delete(id): void {
    const ids = {id};
    this.store.dispatch(formActions.deleteProduct(ids));
  }
}

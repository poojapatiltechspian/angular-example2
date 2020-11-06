import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { CommonService } from '../../common.service';
import * as fromProductAction from './product.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
// add product
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.addProduct),
      mergeMap(action =>
        this.commonService.createProduct(action.product).pipe(
            map(product => fromProductAction.addProductSuccess({product})),
            catchError(error => of(fromProductAction.addProductFailure({error})))
        )
      )
    )
  );
// Load list of products
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.loadProducts),
      mergeMap(() =>
        this.commonService.getProducts().pipe(
            map(products => fromProductAction.loadProductsSuccess({products})),
            catchError(error => of(fromProductAction.loadProductsFailure({error})))
        )
      )
    )
  );
// Load indiviual product
  loadSelectedProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.loadProduct),
      mergeMap((action) =>
        this.commonService.getProductData(action.id).pipe(
            map(product => fromProductAction.loadProductSuccess({selectedProduct: product})),
            catchError(error => of(fromProductAction.loadProductFailure({error})))
        )
      )
    )
  );
// update product
  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.updateProduct),
      mergeMap(action =>
        this.commonService.updateProduct(
          action.product.id,
          action.product.changes
          )
        ),
        // tab(()=> this.router.navigate(''))
      ),
      {dispatch: false}
  );
// delete product
  deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromProductAction.deleteProduct),
    mergeMap(action =>
       this.commonService.deleteProduct(
          action.id,
        )
      ),
      // tab(()=> this.router.navigate(''))
    ),
    {dispatch: false}
);
  constructor(
    private actions$: Actions,
    private commonService: CommonService,
    ) {}

}

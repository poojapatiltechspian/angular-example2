import { Action, createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from './product.model';

// add product
export const addProduct = createAction(
  '[Product Add component] Add Product',
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failuer',
  props<{ error: any }>()
);
// Load list of products
export const loadProducts = createAction(
  '[Product List Components] Load Products',
);
export const loadProductsSuccess = createAction(
  '[Product List Effect] Load Products Success',
  props<{ products: Product[] }>()
);
// export class LoadProductsSuccess implements Action {
//   readonly type = '[Product List Effect] Load Products Success';
//   constructor(public payload: Product[]) {}
// }
export const loadProductsFailure = createAction(
  '[Product List Effect] Load Products Failure',
  props<{ error: any }>()
);
// Load indiviual product
export const loadProduct = createAction(
  '[Product Components] Load Product',
  props<{ id: string }>()
);
export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ selectedProduct: Product }>()
);
export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);
// update product
export const updateProduct = createAction(
  '[Product Edit Component] Update Product',
  props<{ product: Update<Product> }>()
);
// delete product
export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);


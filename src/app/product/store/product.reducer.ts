import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from './product.model';
import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  // additional entities state properties
  error: any;
  selectedProduct: Product;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedProduct: undefined
});


export const productReducer = createReducer(
  initialState,
  // add product
  on(ProductActions.addProductSuccess,
    (state, action) =>
      adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }),
// Load list of products
  on(ProductActions.loadProductsSuccess,
    (state, action) => adapter.setAll(action.products, state)
  ),
  on(ProductActions.loadProductsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
// Load indiviual product
  on(ProductActions.loadProductSuccess,
    (state, action) => {
      return {
        ...state,
        selectedProduct: action.selectedProduct
      };
    }
  ),
  on(ProductActions.loadProductFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
// update product
  on(ProductActions.updateProduct,
    (state, action) => adapter.updateOne(action.product, state)
  ),
// delete product
  on(ProductActions.deleteProduct,
    (state, action) => adapter.removeOne(action.id, state)
  ),
);
export function reducer(state: ProductState | undefined, action: Action): any {
  return productReducer(state, action);
}
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

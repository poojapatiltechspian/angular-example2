import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productsFeatureKey, selectAll} from './product.reducer';
export const selectProductState = createFeatureSelector<ProductState> (
    productsFeatureKey
);
// load all products
export const selectProduct = createSelector(selectProductState, selectAll);
// load indiviual product
export const selectedProduct = createSelector(selectProductState, (state: ProductState) => state.selectedProduct);

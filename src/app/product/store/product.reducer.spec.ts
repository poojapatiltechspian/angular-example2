import { reducer, initialState, productReducer } from './product.reducer';
import * as fromProducts from './product.reducer';
import * as fromActions from './product.actions';
// import { addProductSuccess, LoadProductsSuccess, deleteProduct } from './product.actions';
import { Product } from './product.model';
describe('Product Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });


  // describe('Product Reducer', () => {
    // it('should return the initial state', () => {
    //     expect(productReducer(undefined, { type: initialState.SET_WIDGETS, payload: [] })).toMatchObject(new DashboardState());
    // });

  // it('should set the overview widgets', () => {
  //   const selectedProduct = [{
  //     id: '1',
  //     name: 'product',
  //     description: 'desc',
  //     price: '12',
  //     quantity: '12',
  //     imgPath: 'path'
  // }];
  //   const stats = [];

  //   const state = productReducer(undefined, new LoadProductsSuccess(selectedProduct));
  //   expect(state.entities).toEqual(selectedProduct);
  // });
});

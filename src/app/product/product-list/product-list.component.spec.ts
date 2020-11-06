import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router} from '@angular/router';

import * as fromAuth from '../store/product.reducer';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Product } from '../store/product.model';
describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let router: Router;

  // let mockStore: MockStore;
  // let mockUsernameSelector: MemoizedSelector<fromAuth.ProductState  , string>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should greet Brandon when the username is Brandon', () => {
  //   const response: Product[] = [{
  //     id:  '1',
  //     name: 'product1',
  //     description: 'Description',
  //     price: '10',
  //     quantity: '5',
  //     imgPath: 'assets/img/box.jpg'
  //   }];
  //   // mockUsernameSelector.setResult(response);
  //   // mockStore.refreshState();
  //   // fixture.detectChanges();
  //   component.getLinks();
  //   fixture.detectChanges();
  //   expect(component.productList$).toEqual(response);
  // });

  it('should call LoginUser and return user array', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.edit(1);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['./ngrx-crud-opration/edit-product/', 1]);
  }));
});

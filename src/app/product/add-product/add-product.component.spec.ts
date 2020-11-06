import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { AddProductComponent } from './add-product.component';
import { productReducer } from '../store/product.reducer';
import { ProductEffects } from '../store/product.effects';
import { Observable, of } from 'rxjs';
describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddProductComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({ product: productReducer })
      ],
      providers: [
        provideMockStore(),
        ProductEffects,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: 'test' })
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check form feilds', () => {
    const productForm = {
                id:  '',
                name: '',
                description: '',
                price: '',
                quantity: '',
                img_path: 'assets/img/box.jpg'
              };
    expect(component.productForm.value).toEqual(productForm);
  });

  it('should invalidate form', () => {
    component.productForm.controls.name.setValue('');
    component.productForm.controls.description.setValue('');
    component.productForm.controls.price.setValue('');
    component.productForm.controls.quantity.setValue('');
    component.productForm.controls.img_path.setValue('');
    expect(component.productForm.valid).toBeFalsy();
  });

  it('should validate form', () => {
    component.productForm.controls.name.setValue('Product 5');
    component.productForm.controls.description.setValue('Short Description 5');
    component.productForm.controls.price.setValue('200');
    component.productForm.controls.quantity.setValue('120');
    component.productForm.controls.img_path.setValue('assets/img/box.jpg');
    expect(component.productForm.valid).toBeTruthy();
  });

  it('should call onSubmit and navigate to /ngrx-crud-opration/product-list', fakeAsync(() => {
    const loginForm = {
      user_name:  'user2',
      password: '123'
    };
    spyOn(router, 'navigate');
    component.onSubmit(loginForm);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['./ngrx-crud-opration/product-list']);
  }));
  it('should call editData and navigate to /ngrx-crud-opration/product-list', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.editData();
    expect(component.isEdit).toBeFalsy();
    expect(component.productForm.reset).toBeTruthy();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['./ngrx-crud-opration/product-list']);
  }));

  it('should call edit and navigate to patch values', () => {
    const productForm = {
      id:  '1',
      name: 'product ',
      description: 'Description',
      price: '20',
      quantity: '20',
      img_path: 'assets/img/box.jpg'
    };
    component.edit();
    component.patchForm(productForm);
    fixture.detectChanges();
    expect(component.isEdit).toBeTruthy();
    expect(component.productForm.value).toEqual(productForm);
  });
});

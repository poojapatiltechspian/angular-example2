import { ProductsCrudOprationComponent } from './products-crud-opration.component';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from '../../common.service';
import { ButtonComponent } from '../../layout/button/button.component';
import { of } from 'rxjs';
import { Product } from '../../product/store/product.model';

describe('ProductsCrudOprationComponent', () => {
  let fixture: any;
  let commonServiceMock: CommonService;
  let component;
  let template: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        ProductsCrudOprationComponent,
        ButtonComponent
      ],
      providers: [CommonService]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCrudOprationComponent);
    commonServiceMock = TestBed.inject(CommonService);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it('should call getLinks and return list of products', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'getProducts').and.returnValue(of(response));
    component.getLinks();
    fixture.detectChanges();
    expect(component.products).toEqual(response);
  }));

  it('should call delete', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'deleteProduct').and.returnValue(of([]));
    component.delete(1);
    fixture.detectChanges();
    expect(component.isDelete).toEqual(true);
  }));

  it('should call edit', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'getProductData').and.returnValue(of([response]));
    component.edit(1);
    fixture.detectChanges();
    expect(component.isEdit).toEqual(true);
  }));

  it('Edited data submit', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'updateProduct').and.returnValue(of([response]));
    component.editData();
    fixture.detectChanges();
    expect(component.isEdit).toEqual(false);
  }));

  it('Should submit form', fakeAsync(() => {
    const productForm = {
      id:  '1',
      name: 'product1',
      description: 'Description',
      price: '10',
      quantity: '5',
      img_path: 'assets/img/box.jpg'
    };
    const response: Product[] = [];
    spyOn(commonServiceMock, 'createProduct').and.returnValue(of([response]));
    component.onSubmit(productForm);
    fixture.detectChanges();
    expect(component.isSubmit).toEqual(true);
  }));

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
});

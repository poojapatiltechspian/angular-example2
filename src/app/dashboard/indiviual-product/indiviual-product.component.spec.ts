import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from '../../common.service';
import { IndiviualProductComponent } from './indiviual-product.component';
import { IndiviualProductCardComponent } from '../indiviual-product-card/indiviual-product-card.component';
import { Product } from '../../product/store/product.model';
import { of } from 'rxjs';
describe('IndiviualProductComponent', () => {
  let component: IndiviualProductComponent;
  let fixture: ComponentFixture<IndiviualProductComponent>;
  let commonServiceMock: CommonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiviualProductComponent, IndiviualProductCardComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        CommonService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiviualProductComponent);
    commonServiceMock = TestBed.inject(CommonService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLinks and return list of products', fakeAsync(() => {
    const response: Product[] = [];
    component.productId = '1';
    spyOn(commonServiceMock, 'getProductData').and.returnValue(of(response));
    component.getData();
    fixture.detectChanges();
    expect(component.productData).toEqual(response);
  }));
});

import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from '../common.service';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { of } from 'rxjs';
import { Product } from '../product/store/product.model';
import { Router} from '@angular/router';

export class Books {
  id: string;
  name: string;
  displayName: string;
  author: string;
  price: string;
  description: string;
  imgPath: string;
}
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let commonServiceMock: CommonService;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [ DashboardComponent, DashboardCardComponent],
      providers: [CommonService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    commonServiceMock = TestBed.inject(CommonService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call getproduct and return list of products', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'getProducts').and.returnValue(of(response));
    component.getBooksData();
    fixture.detectChanges();
    expect(component.productData).toEqual(response);
  }));

  it('should call navigationRouteString', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.navigationRouteString('1');
    expect(router.navigate).toHaveBeenCalled();
    // expect(router.navigate).toHaveBeenCalledWith(['/product/']);
  }));
});

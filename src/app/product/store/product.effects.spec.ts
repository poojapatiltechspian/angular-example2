import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductEffects } from './product.effects';
import { CommonService } from '../../common.service';
import * as fromProductAction from './product.actions';
describe('ProductEffects', () => {
  const actions$: Observable<any> = null ;
  let effects: ProductEffects;
  let service: CommonService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductEffects,
        CommonService,
        provideMockActions(() => actions$)
      ]
    });
    service = TestBed.inject(CommonService);
    effects = TestBed.inject(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return a GET_POSTS_SUCCESS action, with the posts, on success', () => {

    const postsToReturn =
      {
        id: '1',
        name: 'Wise and Otherwise',
        description: 'Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself.',
        price: '1200',
        quantity: '30',
        imgPath: 'assets/img/sudhamurti1.jpeg'
      };
    spyOn(service, 'getProducts').and.returnValue(postsToReturn);
    const expectedResult = fromProductAction.loadProductsSuccess(
      {products: [{
                    id: '1',
                    name: 'Wise and Otherwise',
                    description: 'Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself.',
                    price: '1200',
                    quantity: '30',
                    imgPath: 'assets/img/sudhamurti1.jpeg'
                  }]
      }
    );

    effects.loadProducts$.subscribe(action => {
      expect(action).toEqual(expectedResult);
    });
  });
});

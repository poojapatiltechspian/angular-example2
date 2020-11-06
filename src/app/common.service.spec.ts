import { CommonService } from './common.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlingService } from './shared/services/error-handling.service';

describe('CommonService', () => {
  let service: CommonService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CommonService, ErrorHandlingService]
    });
  });
  beforeEach(() => {
    service = TestBed.inject(CommonService);
    http = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add product data and return added data', () => {
    const saveData =  {
      category_tag: 'tech',
      id: 6,
      short_description: 'short description 6',
      title: 'link 6',
    };
    service.createProduct(saveData).subscribe((addedPost) => {
      expect(addedPost).toBe(saveData);
    });
    const req = http.expectOne('http://localhost:3000/products/');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should test http client get for produts', () => {
    const saveData =  {
          id: '1',
          name: 'tech',
          description: 5,
          price: 'short description 5',
          quantity: 'link 5',
        };

    service.getProducts().subscribe((post) => {
      expect(saveData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/products/');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should test http client get for produt from id', () => {
    const expectData = {
        id: '1',
        name: 'Wise and Otherwise',
        description: 'Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself.',
        price: '1200',
        quantity: '30',
        img_path: 'assets/img/sudhamurti1.jpeg'
      };

    service.getProductData('1').subscribe((post) => {
      expect(expectData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/products/1');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(expectData);
  });

  it('should be edit product data and return edit data', () => {
    const id = '1';
    const saveData =  {
      name: 'tech',
      description: 'desc 5',
      price: '5',
      quantity: '5',
    };
    service.updateProduct(id, saveData).subscribe((addedPost) => {
      expect(addedPost).toBe(saveData);
    });
    const req = http.expectOne('http://localhost:3000/products/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should be delete product data and return empty data', () => {
    const id = '1';
    const deleteData =  [];
    service.deleteProduct(id).subscribe((addedPost) => {
      expect(addedPost).toBe(deleteData);
    });
    const req = http.expectOne('http://localhost:3000/products/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(deleteData);
  });

});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/store/product.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ErrorHandlingService } from './shared/services/error-handling.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService,
  ) { }

  createProduct(product): Observable<Product> {
    const url = this.baseurl + 'products/';
    return this.http.post<Product>(url, product)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }
  getProducts(): Observable<Product[]> {
    const url = this.baseurl + 'products/';
    return this.http.get<Product[]>(url)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }
  getProductData(id): Observable<Product> {
    const url = this.baseurl + 'products/' + id;
    return this.http.get<Product>(url)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }
  updateProduct(id: string | number, data: Partial<Product>): Observable<Product> {
    const url = this.baseurl + 'products/' + id;
    return this.http.put<Product>(url, data)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }
  deleteProduct(id): any {
    const url = this.baseurl + 'products/' + id;
    return this.http.delete(url)
    .pipe(
     retry(1),
     catchError(this.errorHandlingService.handleError)
   );
  }

}

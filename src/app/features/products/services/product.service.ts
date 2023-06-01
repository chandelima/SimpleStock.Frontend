import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { ProductResponse } from '../interfaces/product-response.interface';
import { ProductRequest } from '../interfaces/product-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpBaseService {

  private readonly baseUrl = `${environment.apiURL}/products`;

  constructor(protected override readonly injector: Injector) {
    super(injector)
  }

  getProducts(): Observable<ProductResponse[]> {
    return this.httpGet(this.baseUrl);
  }

  getProductsById(id: string): Observable<ProductResponse[]> {
    return this.httpGet(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: string, product: ProductRequest): Observable<ProductResponse[]> {
    return this.httpPut(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpDelete(`${this.baseUrl}/${id}`);
  }

}

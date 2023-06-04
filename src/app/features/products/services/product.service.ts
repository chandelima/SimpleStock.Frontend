import { Injectable, Injector } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ProductResponse } from '../interfaces/product-response.interface';
import { ProductRequest } from '../interfaces/product-request.interface';
import { CrudBaseService } from 'src/app/shared/services/crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudBaseService<ProductRequest, ProductResponse> {

  override baseUrl = `${environment.apiURL}/products`;

  constructor(protected override readonly injector: Injector) {
    super(injector)
  }
}

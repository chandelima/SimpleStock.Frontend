import { Component, Injector } from '@angular/core';

import { ProductService } from './services/product.service';
import { ProductResponse } from './interfaces/product-response.interface';
import { CrudBaseComponent } from 'src/app/shared/components/crud-base/crud-base.component';
import { ProductRequest } from './interfaces/product-request.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent
  extends CrudBaseComponent<ProductRequest, ProductResponse> {

  constructor(
    protected override entityService: ProductService,
    protected override injector: Injector
  ) {
    super(injector)
  }
}

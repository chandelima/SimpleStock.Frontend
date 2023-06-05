import { Component, Injector } from '@angular/core';

import { ProductResponse } from '../../interfaces/product-response.interface';
import { ProductService } from '../../services/product.service';
import { CrudListBaseComponent } from 'src/app/shared/components/crud-base/components/crud-base-list.component';
import { productProperties } from '../../products.properties';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent
  extends CrudListBaseComponent<ProductResponse, ProductResponse> {

  protected override properties = productProperties

  constructor(
    protected override entityService: ProductService,
    protected override injector: Injector
  ) {
    super(injector)
  }
}

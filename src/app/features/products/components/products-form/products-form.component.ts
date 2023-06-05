import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductResponse } from '../../interfaces/product-response.interface';
import { ProductService } from '../../services/product.service';
import { ProductRequest } from '../../interfaces/product-request.interface';
import { CrudFormBaseComponent } from 'src/app/shared/components/crud-base/components/crud-base-form.component';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent extends CrudFormBaseComponent<ProductRequest, ProductResponse> {

  override form: FormGroup = this.formBuilder.group({
    id: null,
		name: [null, Validators.required],
		amount: [null, [Validators.min(0.01), Validators.required]],
		price: [null, [Validators.min(0.01), Validators.required]]
	});

  constructor(
    private readonly formBuilder: FormBuilder,
    protected override entityService: ProductService,
    protected override injector: Injector
  ) {
    super(injector)
  }

  override setDataToSave(): ProductRequest {
    return {
      name: this.form.get("name")!.value,
      amount: this.form.get("amount")!.value,
      price: this.form.get("price")!.value
    };
  }

  setFormPrice(event: any) {
    const price = event.value;
    this.form.patchValue({ price });
  }
}

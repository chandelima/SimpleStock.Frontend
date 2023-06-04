import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductResponse } from '../../interfaces/product-response.interface';
import { ProductService } from '../../services/product.service';
import { ProductRequest } from '../../interfaces/product-request.interface';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnChanges, OnDestroy {

  @Input() formVisible?: boolean;
  @Input() product?: ProductResponse;
  @Output() setFormVisible = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    id: null,
		name: [null, Validators.required],
		amount: [null, [Validators.min(0.01), Validators.required]],
		price: [null, [Validators.min(0.01), Validators.required]]
	});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly productService: ProductService,
    private readonly subscriptionService: SubscriptionService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["product"]?.currentValue === undefined) return;

    this.form.patchValue({ ...changes["product"].currentValue  });
  }

  ngOnDestroy(): void {
    this.subscriptionService.cleanSubscriptions(this.constructor.name);
  }

  save() {
    const productToSave: ProductRequest = {
      name: this.form.get("name")!.value,
      amount: this.form.get("amount")!.value,
      price: this.form.get("price")!.value
    }

    if (!this.product)
      this.create(productToSave);
    else
      this.edit(this.product!.id, productToSave);

    this.setFormVisible.emit(false);
    this.form.reset();
  }

  create(product: ProductRequest) {
    const createSubscription = this.productService.create(product)
      .subscribe(
        _ => this.productService.notify()
      );
    this.subscriptionService
      .addSubscription(createSubscription, this.constructor.name);
  }

  edit(id: string, product: ProductRequest) {
    const updateSubscription = this.productService.update(id, product)
      .subscribe(
        _ => this.productService.notify()
      );
    this.subscriptionService
      .addSubscription(updateSubscription, this.constructor.name);
  }

  cancel() {
    this.setFormVisible.emit(false);
		this.form.reset();
  }

  verifyValidTouched(control: string): boolean {
		return (
			!this.form.get(control)!.value &&
			this.form.get(control)!.touched
		);
	}

  setFormPrice(event: any) {
    const price = event.value;
    this.form.patchValue({ price });
  }

	applyControlInvalid(control: string): object {
		return {
			'ng-invalid': this.verifyValidTouched(control),
			'ng-dirty': this.verifyValidTouched(control),
		};
	}
}

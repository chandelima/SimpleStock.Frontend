import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductService } from './services/product.service';
import { ProductResponse } from './interfaces/product-response.interface';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: ProductResponse[] = [];
  searchText: string = "";
  formVisible: boolean = false;

  constructor(
    private readonly productService: ProductService,
    private readonly subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
    const notifyierSubscription = this.productService.notifyier
      .subscribe(_ => this.getAllProducts());
    this.subscriptionService
      .addSubscription(notifyierSubscription, this.constructor.name);
  }

  ngOnDestroy(): void {
      this.subscriptionService.cleanSubscriptions(this.constructor.name);
  }

  getAllProducts(): void {
    const getSubscription = this.productService.getAll()
      .subscribe(p => this.products = p);
    this.subscriptionService
      .addSubscription(getSubscription, this.constructor.name);
  }

  setFormVisible(formVisible: boolean) {
    this.formVisible = formVisible
  }
}

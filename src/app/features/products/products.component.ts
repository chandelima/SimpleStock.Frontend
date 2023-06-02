import { Component, OnInit } from '@angular/core';

import { ProductService } from './services/product.service';
import { ProductResponse } from './interfaces/product-response.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductResponse[] = [];
  searchText: string = "";
  formVisible: boolean = false;

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe(p => this.products = p);
  }

  setFormVisible(formVisible: boolean) {
    this.formVisible = formVisible;
  }
}

import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
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

  constructor(
    private readonly productService: ProductService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe(p => this.products = p);
  }

  confirmDeleteDialog(product: ProductResponse) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o produto selecionado?',
      header: 'Confirmação',
      icon: 'ph ph-trash',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    })
  };
}

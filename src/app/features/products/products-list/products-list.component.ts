import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../interfaces/product-response.interface';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: ProductResponse[] = [];

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit() {

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

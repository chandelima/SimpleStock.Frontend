import { Component, Input, OnDestroy } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductResponse } from '../../interfaces/product-response.interface';
import { ProductService } from '../../services/product.service';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnDestroy {

  @Input() products: ProductResponse[] = [];
  productToEdit?: ProductResponse
  formVisible: boolean = false;

  constructor(
    private readonly productService: ProductService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly subscriptionService: SubscriptionService,

  ) { }

  ngOnDestroy(): void {
    this.subscriptionService.cleanSubscriptions(this.constructor.name);
  }

  edit(product: ProductResponse) {
    this.setFormVisible(true);
    this.productToEdit = product;
  }

  setFormVisible(formVisible: boolean) {
    this.formVisible = formVisible

    if (!formVisible) this.productToEdit = undefined;
  }

  delete(product: ProductResponse) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir o produto selecionado?`,
      header: 'Confirmação',
      icon: 'ph ph-trash',
      accept: () => {
        const deleteSubscription = this.productService.delete(product.id)
        .subscribe(
          _ => {
            this.messageService.add({
              severity: 'info',
              detail: 'Produto excluído com sucesso'
            });
            this.productService.notify();
          }
          );
        this.subscriptionService
          .addSubscription(deleteSubscription, this.constructor.name);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          detail: 'Operação de exclusão cancelada'
        });
      }
    });

  };

}

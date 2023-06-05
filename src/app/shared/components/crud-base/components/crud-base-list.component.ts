import { Component, Injector, Input, OnDestroy } from "@angular/core";

import { ConfirmationService, MessageService } from "primeng/api";
import { CrudBaseService } from "src/app/shared/services/crud-base.service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { EntityProperties } from '../../../interfaces/entity-properties.interface';
import { Utils } from "src/app/shared/utils";
import { EntityBase } from "src/app/shared/interfaces/entity-base.interface";

@Component({ template: '' })
export abstract class CrudListBaseComponent<Request, Response extends EntityBase> implements OnDestroy {

  @Input() dataList: Response[] = [];
  dataToEdit?: Response
  formVisible: boolean = false;
  protected readonly properties?: EntityProperties;
  protected readonly entityService?: CrudBaseService<Request, Response>;
  private readonly confirmationService?: ConfirmationService;
  private readonly messageService?: MessageService;
  private readonly subscriptionService?: SubscriptionService;

  constructor(
    protected readonly injector: Injector
  ) {
    if (injector == null || injector == undefined)
      throw new Error("Injector can't bee null");

    this.confirmationService = injector.get(ConfirmationService);
    this.messageService = injector.get(MessageService);
    this.subscriptionService = injector.get(SubscriptionService);
  }

  ngOnDestroy(): void {
    this.subscriptionService!.cleanSubscriptions(this.constructor.name);
  }

  edit(data: Response) {
    this.setFormVisible(true);
    this.dataToEdit = data;
  }

  setFormVisible(formVisible: boolean) {
    this.formVisible = formVisible

    if (!formVisible) this.dataToEdit = undefined;
  }

  delete(data: Response) {
    this.confirmationService!.confirm({
      message: `Tem certeza que deseja excluir o
                ${this.properties?.singularName} selecionado?`,
      header: 'Confirmação',
      icon: 'ph ph-trash',
      accept: () => {
        const deleteSubscription = this.entityService!.delete(data.id)
        .subscribe(
          _ => {
            const entityCapitalizedName = Utils
              .CapitalizeFirstLetter(this.properties!.singularName);

            this.messageService!.add({
              severity: 'info',
              detail: `${entityCapitalizedName} excluído com sucesso`
            });
            this.entityService!.notify();
          }
          );
        this.subscriptionService!
          .addSubscription(deleteSubscription, this.constructor.name);
      },
      reject: () => {
        this.messageService!.add({
          severity: 'error',
          detail: 'Operação de exclusão cancelada'
        });
      }
    });
  };
}

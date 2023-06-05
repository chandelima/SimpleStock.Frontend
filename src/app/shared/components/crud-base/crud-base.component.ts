import { Component, Injector, OnDestroy, OnInit } from '@angular/core';

import { SubscriptionService } from '../../services/subscription.service';
import { CrudBaseService } from '../../services/crud-base.service';

@Component({ template: '' })
export abstract class CrudBaseComponent<Request, Response>
  implements OnInit, OnDestroy {

  dataList: Response[] = [];
  searchText: string = "";
  formVisible: boolean = false;
  protected readonly entityService?: CrudBaseService<Request, Response>;
  private readonly subscriptionService?: SubscriptionService;

  constructor(
    protected readonly injector: Injector
  ) {
    if (injector == null || injector == undefined)
      throw new Error("Injector can't bee null");

    this.subscriptionService = injector.get(SubscriptionService);
  }

  ngOnInit(): void {
    const notifyierSubscription = this.entityService!.notifyier
      .subscribe(_ => this.getAllProducts());
    this.subscriptionService!
      .addSubscription(notifyierSubscription, this.constructor.name);
  }

  ngOnDestroy(): void {
      this.subscriptionService!.cleanSubscriptions(this.constructor.name);
  }

  getAllProducts(): void {
    const getSubscription = this.entityService!.getAll()
      .subscribe(p => this.dataList = p);
    this.subscriptionService!
      .addSubscription(getSubscription, this.constructor.name);
  }

  setFormVisible(formVisible: boolean) {
    this.formVisible = formVisible
  }
}

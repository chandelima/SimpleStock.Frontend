import { Component, EventEmitter, Injector, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { EntityBase } from "src/app/shared/interfaces/entity-base.interface";
import { CrudBaseService } from "src/app/shared/services/crud-base.service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";

@Component({ template: '' })
export abstract class CrudFormBaseComponent<Request, Response extends EntityBase> implements OnChanges, OnDestroy {

  @Input() formVisible?: boolean;
  @Input() data?: Response;
  @Output() setFormVisible = new EventEmitter();
  form?: FormGroup;
  protected readonly entityService?: CrudBaseService<Request, Response>;
  private readonly subscriptionService?: SubscriptionService;

  constructor(
    protected readonly injector: Injector
  ) {
    if (injector == null || injector == undefined)
      throw new Error("Injector can't bee null");

    this.subscriptionService = injector.get(SubscriptionService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]?.currentValue === undefined) return;

    this.form!.patchValue({ ...changes["data"].currentValue  });
  }

  ngOnDestroy(): void {
    this.subscriptionService!.cleanSubscriptions(this.constructor.name);
  }

  setDataToSave(): Request {
    throw new Error("'setDataToSave' must be overrided");
  }

  save() {
    if (!this.data)
      this.create(this.setDataToSave());
    else
      this.edit(this.data.id, this.setDataToSave());

    this.setFormVisible.emit(false);
    this.form!.reset();
  }

  create(product: Request) {
    const createSubscription = this.entityService!.create(product)
      .subscribe(
        _ => this.entityService!.notify()
      );
    this.subscriptionService!
      .addSubscription(createSubscription, this.constructor.name);
  }

  edit(id: string, product: Request) {
    const updateSubscription = this.entityService!.update(id, product)
      .subscribe(
        _ => this.entityService!.notify()
      );
    this.subscriptionService!
      .addSubscription(updateSubscription, this.constructor.name);
  }

  cancel() {
    this.setFormVisible.emit(false);
		this.form!.reset();
  }

  verifyValidTouched(control: string): boolean {
		return (
			!this.form!.get(control)!.value &&
			this.form!.get(control)!.touched
		);
	}

	applyControlInvalid(control: string): object {
		return {
			'ng-invalid': this.verifyValidTouched(control),
			'ng-dirty': this.verifyValidTouched(control),
		};
	}
}

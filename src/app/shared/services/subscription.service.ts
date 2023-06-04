import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';

interface SubscriptionObject {
  className: string,
  subscription: Subscription
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {

  private subscriptions: SubscriptionObject[] = [];

  constructor() { }

  public addSubscription(subscription: Subscription, className: string): void {
    if (!className) return;

    const obj: SubscriptionObject = { className, subscription };
    this.subscriptions.push(obj);
  }

  public cleanSubscriptions(className: string): void {
    if (!className) return;

    const classSubscriptions = this.subscriptions.filter(s => s.className = className);
    classSubscriptions.forEach(s => {
      s.subscription.unsubscribe();
      const filteredSubs = this.subscriptions.filter(subs => subs !== s);
      this.subscriptions = filteredSubs;
    });
  }
}

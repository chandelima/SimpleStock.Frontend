import { Injectable, Injector } from '@angular/core';

import { CustomerRequest } from '../interfaces/customer-request.interface';
import { CustomerResponse } from '../interfaces/customer-response.interface';
import { environment } from 'src/environments/environment';
import { CrudBaseService } from 'src/app/shared/services/crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CrudBaseService<CustomerRequest, CustomerResponse> {

  override baseUrl = `${environment.apiURL}/customers`;

  constructor(protected override readonly injector: Injector) {
    super(injector)
  }
}

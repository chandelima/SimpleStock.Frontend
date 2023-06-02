import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ConfirmationService, MessageService } from "primeng/api";
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModule } from "../template/primeng/primeng.module";
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';

@NgModule({
  declarations: [
    OrdersComponent,
    CustomersComponent,
    ProductsComponent,
    DashboardComponent,
    ProductsListComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  providers: [ ConfirmationService, MessageService ]
})
export class FeaturesModule { }

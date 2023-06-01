import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ConfirmationService, MessageService } from "primeng/api";
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModule } from "../template/primeng/primeng.module";

@NgModule({
  declarations: [
    OrdersComponent,
    CustomersComponent,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ],
  providers: [ ConfirmationService, MessageService ]
})
export class FeaturesModule { }

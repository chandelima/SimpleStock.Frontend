import { NgModule } from "@angular/core";
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
  
    OrdersComponent,
       CustomersComponent,
       ProductsComponent,
       DashboardComponent
  ]
})
export default class FeaturesModule { }

import { NgModule } from "@angular/core";
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    DashboardComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent
  ]
})
export default class PagesModule { }

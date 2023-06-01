import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { PrimengModule } from './template/primeng/primeng.module';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,

    FeaturesModule,
    PrimengModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import SublevelMenuComponent from './sidebar/sublevel-menu/sublevel-menu.component';

const components = [
  BodyComponent,
  SidebarComponent,
  SublevelMenuComponent
];

@NgModule({
  declarations: [
    BodyComponent,
    SidebarComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    BodyComponent,
    SidebarComponent
  ]
})
export default class TemplateModule { }

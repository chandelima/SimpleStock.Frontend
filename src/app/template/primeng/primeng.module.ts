import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


const primeNgModules = [
  ButtonModule,
  ConfirmDialogModule,
  InputTextModule,
  TableModule
]

@NgModule({
  declarations: [],
  imports: [ primeNgModules ],
  exports: [ primeNgModules ]
})
export class PrimengModule { }

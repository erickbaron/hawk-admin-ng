import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancaRoutingModule } from './financa-routing.module';
import { FinancaIndexComponent } from './financa-index/financa-index.component';
import { FinancaCadastroComponent } from './financa-cadastro/financa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { FinancaEditarComponent } from './financa-editar/financa-editar.component';

@NgModule({
  declarations: [FinancaIndexComponent, FinancaCadastroComponent, FinancaEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    FinancaRoutingModule
  ]
})
export class FinancaModule { }

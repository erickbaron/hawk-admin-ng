import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancaRoutingModule } from './financa-routing.module';
import { FinancaIndexComponent } from './financa-index/financa-index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FinancaIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    FinancaRoutingModule
  ]
})
export class FinancaModule { }

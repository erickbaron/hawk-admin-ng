import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoIndexComponent } from './produto-index/produto-index.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutoIndexComponent, ProdutoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
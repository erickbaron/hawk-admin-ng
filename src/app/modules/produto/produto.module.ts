import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoIndexComponent } from './produto-index/produto-index.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ProdutoIndexComponent, ProdutoCadastroComponent, ProdutoEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaIndexComponent } from './categoria-index/categoria-index.component';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { FormsModule } from '@angular/forms';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';

@NgModule({
  declarations: [CategoriaIndexComponent, CategoriaCadastroComponent, CategoriaEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }

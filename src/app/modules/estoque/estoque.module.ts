import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueIndexComponent } from './estoque-index/estoque-index.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { FormsModule } from '@angular/forms';
import { EstoqueEditarComponent } from './estoque-editar/estoque-editar.component';


@NgModule({
  declarations: [EstoqueIndexComponent , EstoqueCadastroComponent, EstoqueEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }

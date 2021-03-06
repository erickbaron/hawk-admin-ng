import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueIndexComponent } from './estoque-index/estoque-index.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EstoqueEditarComponent } from './estoque-editar/estoque-editar.component';




@NgModule({
  declarations: [EstoqueIndexComponent , EstoqueCadastroComponent, EstoqueEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }

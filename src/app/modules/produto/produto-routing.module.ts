import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoIndexComponent } from './produto-index/produto-index.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';

const routes: Routes = [
  { path: '', component: ProdutoIndexComponent },
  { path: 'cadastro', component: ProdutoCadastroComponent},
  { path: 'editar/:id', component: ProdutoEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
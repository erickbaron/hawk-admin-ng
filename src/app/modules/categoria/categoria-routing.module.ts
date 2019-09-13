import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaIndexComponent } from './categoria-index/categoria-index.component';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';

const routes: Routes = [
  { path: '', component: CategoriaIndexComponent },
  { path: 'cadastro', component: CategoriaCadastroComponent},
  { path: 'editar/:id', component: CategoriaEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

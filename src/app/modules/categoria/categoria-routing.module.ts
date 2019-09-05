import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaIndexComponent } from './categoria-index/categoria-index.component';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';

const routes: Routes = [
  { path: '', component: CategoriaIndexComponent },
  { path: 'cadastro', component: CategoriaCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

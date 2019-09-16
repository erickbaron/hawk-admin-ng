import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EstoqueIndexComponent } from './estoque-index/estoque-index.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { EstoqueEditarComponent } from './estoque-editar/estoque-editar.component';

const routes : Routes =[
  {path:'',component: EstoqueIndexComponent },
  {path: 'cadastro', component: EstoqueCadastroComponent},
  {path: 'editar/:id', component: EstoqueEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }

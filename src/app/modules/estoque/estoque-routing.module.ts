import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EstoqueIndexComponent } from './estoque-index/estoque-index.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';

const routes : Routes =[
  {path:'',component: EstoqueIndexComponent },
  {path: 'estoque', component: EstoqueCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }

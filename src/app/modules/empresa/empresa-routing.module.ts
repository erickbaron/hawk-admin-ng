import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: EmpresaIndexComponent },
  { path: 'cadastro', component: EmpresaCadastroComponent},
  { path: 'editar/:id', component: EmpresaEditarComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }

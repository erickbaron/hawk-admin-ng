import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [EmpresaIndexComponent, EmpresaCadastroComponent, EmpresaEditarComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TextMaskModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }

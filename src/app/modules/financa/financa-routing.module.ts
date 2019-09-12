import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancaIndexComponent} from './financa-index/financa-index.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: FinancaIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancaRoutingModule { }

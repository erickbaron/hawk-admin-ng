import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'app/services/financa.service';
import { Financa } from 'app/models/financa';

@Component({
  selector: 'app-financa-index',
  templateUrl: './financa-index.component.html',
  styles: []
})
export class FinancaIndexComponent implements OnInit {

  constructor(private service: FinancaService) { }

  financas: Financa[] = [];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.financas = x;
    }, error => { 
      alert("ERROR");
    });
  }

}

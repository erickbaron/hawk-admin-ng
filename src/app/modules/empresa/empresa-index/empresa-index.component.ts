import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'app/services/empresa.service';
import { Empresa } from 'app/models/empresa';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styles: []
})
export class EmpresaIndexComponent implements OnInit {

  constructor(private service: EmpresaService) { }

  empresas: Empresa[] = [];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.empresas = x;
    
    });
  }

  apagar(id: number){
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    
    })
  }

}

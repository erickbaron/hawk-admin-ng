import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'app/services/estoque.service';
import { Estoque } from 'app/models/estoque';


@Component({
  selector: 'app-estoque-index',
  templateUrl: './estoque-index.component.html',
  styles: []
})
export class EstoqueIndexComponent implements OnInit {

  constructor(private service: EstoqueService) { }

 estoques: Estoque[] = [];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.estoques = x;
    }, error => { 
      
    });
  }

  apagar(id: number){
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    }, error => {
      
    })
  }

}

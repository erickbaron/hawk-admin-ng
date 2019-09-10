import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';

@Component({
  selector: 'app-produto-index',
  templateUrl: './produto-index.component.html',
  styles: []
})
export class ProdutoIndexComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;
    }, error => { 
      alert("ERROR");
    });
  }

  apagar(id: number){
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    }, error => {
      alert("ERRO");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: []
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private service: ProdutoService) { }

  ngOnInit() {
  }

  salvar() {
    this.service.adicionar(this.produto).subscribe(x => {
      // sucesso
      alert("Cadastrou")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar")
    })
  }
}

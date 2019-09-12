import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: []
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto = new Produto();
  
  id: number
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
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

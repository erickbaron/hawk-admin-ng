import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { Categoria } from 'app/models/categoria';
import { CategoriaService } from 'app/services/categoria.service';


@Component({
  selector: 'app-produto-index',
  templateUrl: './produto-index.component.html',
  styles: []
})
export class ProdutoIndexComponent implements OnInit {

  constructor(
    private service: ProdutoService,
    private serviceCat: CategoriaService

    ) { }

  produto: Produto = new Produto;
  produtos: Produto[] = [];
  categorias: Categoria[] = [];
idCat: number;
  imagemLargura = 50;
  imagemMargem = 2;

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados() {
    this.obterCategorias();
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;
    }, error => {
      alert("ERROR");
    });
  }

  apagar(id: number) {
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    }, error => {
      alert("ERRO");
    })
  }

  obterCategorias() {
    this.serviceCat.obterTodos().subscribe(x => {
      this.categorias = x;
    })
  }

}

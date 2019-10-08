import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { CategoriaService } from 'app/services/categoria.service';
import { EmpresaService } from 'app/services/empresa.service';
import { Categoria } from 'app/models/categoria';
import { environment } from 'environments/environment';
 

@Component({
  selector: 'app-produto-index',
  templateUrl: './produto-index.component.html',
  styles: []
})
export class ProdutoIndexComponent implements OnInit {
  
  produtos: Produto[] = [];
  produto: Produto = new Produto();
  categoria: Categoria = new Categoria();
  baseUrl = environment.urlServidor;

  categoriaNome: string = "";
  imagemLargura = 50;
  imagemMargem = 2;
  descricaoLargura = 250;
  nomeLargura = 200;
  
  constructor(
    private service: ProdutoService,
    private serviceCategoria: CategoriaService,
    private serviceEmpresa: EmpresaService,
 
    ) { }

    ngOnInit() {
      this.atualizarDados();
    }

    obterCategoriaPeloId(){
      this.serviceCategoria.obterPeloId(this.produto.id)
      this.categoriaNome = this.categoria.nome
    }


  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;

    }, error => {
      alert('Erro ao carregar a página')});
  }

  apagar(id: number) {
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    }, error => {
      alert("Erro ao apagar os dados");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'app/services/categoria.service';
import { Categoria } from 'app/models/categoria';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: []
})
export class ProdutoCadastroComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto();

  categorias: Categoria[] = [];
  idCategoria: string = '';
  
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.returnUrl = '/produto'
  }

  obterTodosCategoria() {
    this.categoriaService.obterTodos().subscribe(x => {
      this.categorias = x;
    })
  }
  selecionadoCategoria(event) {
    this.idCategoria = event == undefined ? 0 : event.id;
  }

  salvar() {
    this.service.adicionar(this.produto).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      // sucesso
      alert("Cadastrou")
    },
      error => {
        // erro
        alert("Não foi possível cadastrar")
      })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }
}

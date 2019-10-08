import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'app/services/categoria.service';
import { Categoria } from 'app/models/categoria';
import { EmpresaService } from 'app/services/empresa.service';
import { Empresa } from 'app/models/empresa';
import { ImagemProduto } from 'app/models/imagemProduto';
import { ImagemProdutoService } from 'app/services/imagemProduto';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: []
})
export class ProdutoCadastroComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto();

  produtos: Produto[] = [];
  empresas: Empresa[] = [];
  empresaId: string = '';

  //Imagem
  file: File;

  dataAtual: string;

  categorias: Categoria[] = [];
  categoriaId: string = '';

  constructor(
    // private imgService: ImagemProdutoService,
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private empresaService: EmpresaService,
  ) { }

  ngOnInit() {
    this.returnUrl = '/produto'
  }

  obterTodosCategoria() {
    this.categoriaService.obterTodos().subscribe(x => {
      this.categorias = x;
    })
  }
  selecionadoCategoria(event) {
    this.categoriaId = event == undefined ? 0 : event.id;
  }


  obterTodosEmpresa() {
    this.empresaService.obterTodos().subscribe(x => {
      this.empresas = x;
    })

  }
  selecionadoEmpresa(event) {
    this.empresaId = event == undefined ? 0 : event.id;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
      console.log(this.file);
    }
  }

  uploadImagem() {
    const nomeArquivo = this.produto.nomeArquivo.split('\\', 3);
    this.produto.nomeArquivo = nomeArquivo[2];

    this.service.postUpload(this.file, this[2])
      .subscribe(
        () => {
          this.dataAtual = new Date().getMilliseconds().toString();
          this.atualizarDados();
        }
      );
  }

  salvar() {
    this.atualizarDados();
    this.uploadImagem();
    this.service.adicionar(this.produto).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      this.atualizarDados();
      // sucesso
      this.produto.nomeArquivo = null;
    },
      error => {
        // erro
        alert("Não foi possível cadastrar")
      })
  }

  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;
    }, error => {
      alert("Erro ao atualizar a página");
    });
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }
}

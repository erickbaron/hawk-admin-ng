import { Component, OnInit } from '@angular/core';
import { Estoque } from 'app/models/estoque';
import { EstoqueService } from 'app/services/estoque.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'app/services/empresa.service';
import { Empresa } from 'app/models/empresa';
import { Produto } from 'app/models/produto';
import { ProdutoService } from 'app/services/produto.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styles: []
})
export class EstoqueCadastroComponent implements OnInit {
  returnUrl: string;

  estoque: Estoque = new Estoque();

  empresas: Empresa[] = [];
  idEmpresa: string = '';

  produtos: Produto[] = [];
  idProduto: string= '';

  estoques: Estoque[] = [];

  constructor(
    private service: EstoqueService,
    private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService,
    private produtoService:ProdutoService) { }

  ngOnInit() {
    this.returnUrl = '/estoque'


    
  }


  obterTodosEmpresa() {
    this.empresaService.obterTodos().subscribe(x => {
      this.empresas = x;
    })
  }
  selecionadoEmpresa(event) {
    this.idEmpresa = event == undefined ? 0 : event.id;
  }

  obterTodosProduto() {
    this.produtoService.obterTodos().subscribe(x => {
      this.produtos = x;
    })
  }

  selecionadoProduto(event) {
    this.idProduto = event == undefined ? 0 : event.id;
  }


atualizarDados(){
  this.service.obterTodos().subscribe(x => {
    this.estoques = x;
  }, error => { 
    
  });
}
  salvar() {
    this.service.adicionar(this.estoque).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      this.atualizarDados();
      // sucesso
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

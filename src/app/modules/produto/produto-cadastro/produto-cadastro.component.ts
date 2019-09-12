import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: []
})
export class ProdutoCadastroComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto();
  
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/produto'
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

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }
}

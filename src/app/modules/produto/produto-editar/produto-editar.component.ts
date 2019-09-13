import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'app/models/produto';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styles: []
})
export class ProdutoEditarComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto;

  id: number
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/produto'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.produto = x;
    })
  }


  alterar(produto) {
    this.service.alterar(produto).subscribe( x => {
      alert("Registro Alterado com Sucesso")
    },
    error => {
      alert("Não foi possível alterar")
    })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }

}

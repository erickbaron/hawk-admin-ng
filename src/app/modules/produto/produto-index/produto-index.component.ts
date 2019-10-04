import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/models/produto';
import { CategoriaService } from 'app/services/categoria.service';
import { EmpresaService } from 'app/services/empresa.service';
import { Categoria } from 'app/models/categoria';
 

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

  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;
    
    });
  }

  apagar(id: number){
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
    
    })
  }

}

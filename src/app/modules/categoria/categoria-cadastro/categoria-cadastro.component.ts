import { Component, OnInit } from '@angular/core';
import { Categoria } from 'app/models/categoria';
import { CategoriaService } from 'app/services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styles: []
})
export class CategoriaCadastroComponent implements OnInit {
  returnUrl: string;

  categoria: Categoria = new Categoria();
categorias: Categoria[] = [];
  constructor(
    private service: CategoriaService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/categoria'
  }

  salvar() {
    this.service.adicionar(this.categoria).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
  
    })
  }

  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.categorias = x;
   
    });
  }

    cancelar() {
      this.router.navigateByUrl(this.returnUrl)
    }
}

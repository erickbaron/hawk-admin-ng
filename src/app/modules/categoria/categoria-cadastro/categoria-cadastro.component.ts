import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { Categoria } from 'app/models/categoria';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styles: []
})
export class CategoriaCadastroComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(private service: CategoriaService) { }

  ngOnInit() {
  }

  salvar() {
    this.service.adicionar(this.categoria).subscribe(x => {
      // sucesso
      alert("Cadastrou")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar")
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { Categoria } from 'app/models/categoria';

@Component({
  selector: 'app-categoria-index',
  templateUrl: './categoria-index.component.html',
  styles: []
})
export class CategoriaIndexComponent implements OnInit {

  constructor(private service: CategoriaService) { }

  categorias: Categoria[] = [];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.categorias = x;
   
    });
  }

  apagar(id: number){
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados();
  
    })
  }

  

}

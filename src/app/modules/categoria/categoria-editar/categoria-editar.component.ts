import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'app/models/categoria';

@Component({
  selector: 'app-categoria-editar',
  templateUrl: './categoria-editar.component.html',
  styles: []
})
export class CategoriaEditarComponent implements OnInit {
  categoria: Categoria = new Categoria;
  id: number
  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.categoria = x;
    })
  }


  alterar(categoria) {
    this.service.alterar(categoria).subscribe( x => {
      alert("Registro Alterado com Sucesso")
    },
    error => {
      alert("Não foi possível alterar")
    })
  }

}

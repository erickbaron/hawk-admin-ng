import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'app/models/categoria';

@Component({
  selector: 'app-categoria-editar',
  templateUrl: './categoria-editar.component.html',
  styles: []
})
export class CategoriaEditarComponent implements OnInit {
  returnUrl: string;

  categoria: Categoria = new Categoria;

  id: number
  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

    categorias: Categoria[] = [];

  ngOnInit() {
    this.returnUrl = '/categoria'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.categoria = x;
    })
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.categorias = x;

    }, error => { 
      alert("Erro ao atualizar a página");
    });
  }

  alterar(categoria) {
    this.router.navigateByUrl(this.returnUrl)
    this.service.alterar(categoria).subscribe( x => {
      this.atualizarDados();

    },
    error => {
      alert("Não foi possível alterar")
    })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }


}

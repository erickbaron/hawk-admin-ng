import { Component, OnInit } from '@angular/core';
import { Categoria } from 'app/models/categoria';
import { CategoriaService } from 'app/services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styles: []
})
export class CategoriaCadastroComponent implements OnInit {
  returnUrl: string;

  categoria: Categoria = new Categoria();

  constructor(
    private service: CategoriaService, 
    private route: ActivatedRoute, 
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.returnUrl = '/categoria'
  }

  salvar() {
    this.service.adicionar(this.categoria).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      // sucesso
      this.toastr.success("Cadastrou")
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

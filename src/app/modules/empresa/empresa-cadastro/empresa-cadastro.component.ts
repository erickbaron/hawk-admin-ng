import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'app/services/categoria.service';
import { EmpresaService } from 'app/services/empresa.service';
import { Empresa } from 'app/models/empresa';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styles: []
})
export class EmpresaCadastroComponent implements OnInit {
  returnUrl: string;

  empresa: Empresa = new Empresa();

  constructor(
    private service: EmpresaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/empresa'
  }

  salvar() {
    this.service.adicionar(this.empresa).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
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

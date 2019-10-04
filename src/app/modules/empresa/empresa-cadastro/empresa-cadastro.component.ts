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

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/];

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
   
      })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }
}

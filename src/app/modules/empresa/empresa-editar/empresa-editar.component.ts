import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'app/services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'app/models/empresa';

@Component({
  selector: 'app-empresa-editar',
  templateUrl: './empresa-editar.component.html',
  styles: []
})
export class EmpresaEditarComponent implements OnInit {
  returnUrl: string;

  empresa: Empresa = new Empresa;

  id: number

  constructor(
    private service: EmpresaService,
    private route: ActivatedRoute,
    private router: Router) { }
  empresas: Empresa[] = [];

  ngOnInit() {
    this.returnUrl = '/empresa'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.empresa = x;
    })
  }


  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.empresas = x;
    }, error => {
      alert("Erro ao atualizar a página");
    });
  }

  alterar(empresa) {
    this.service.alterar(empresa).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      this.atualizarDados()
    },
      error => {
        alert("Não foi possível alterar")
      })
  }


  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }

}

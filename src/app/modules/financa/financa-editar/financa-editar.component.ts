import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'app/services/financa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Financa } from 'app/models/financa';

@Component({
  selector: 'app-financa-editar',
  templateUrl: './financa-editar.component.html',
  styles: []
})
export class FinancaEditarComponent implements OnInit {
  returnUrl: string;

  financa: Financa = new Financa;

  id: number
  constructor(
    private service: FinancaService,
    private route: ActivatedRoute,
    private router: Router) { }

    financas: Financa[] = [];

  ngOnInit() {
    this.returnUrl = '/financa'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.financa = x;
    })
  }

  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.financas = x;
    }, error => { 
      alert("ERROR");
    });
  }

  alterar(financa) {
    this.router.navigateByUrl(this.returnUrl)
    this.atualizarDados();
    this.service.alterar(financa).subscribe( x => {
      alert("Registro Alterado com Sucesso")
    },
    error => {
      alert("Não foi possível alterar")
    })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }


}

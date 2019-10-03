import { Component, OnInit } from '@angular/core';
import { Financa } from 'app/models/financa';
import { FinancaService } from 'app/services/financa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financa-cadastro',
  templateUrl: './financa-cadastro.component.html',
  styles: []
})
export class FinancaCadastroComponent implements OnInit {
  returnUrl: string;

  financa: Financa = new Financa();

  constructor(
    private service: FinancaService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/financa'
  }

  salvar() {
    this.service.adicionar(this.financa).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
    })
  }

    cancelar() {
      this.router.navigateByUrl(this.returnUrl)
    }
}

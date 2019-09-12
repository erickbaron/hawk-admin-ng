import { Component, OnInit } from '@angular/core';
import { Estoque } from 'app/models/estoque';
import { EstoqueService } from 'app/services/estoque.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styles: []
})
export class EstoqueCadastroComponent implements OnInit {
  returnUrl: string;

  estoque: Estoque = new Estoque();

  constructor(
    private service: EstoqueService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = "/estoque"
  }

  salvar() {
    this.service.adicionar(this.estoque).subscribe(x => {
      // sucesso
      alert("Cadastrou")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar")
    })
  }

  cancelar(){
    this.router.navigateByUrl(this.returnUrl)
  }

  

  
}

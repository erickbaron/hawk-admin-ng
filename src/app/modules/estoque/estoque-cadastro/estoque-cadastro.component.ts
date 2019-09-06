import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'app/service/estoque.service';
import { Estoque } from 'app/models/estoque';

@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styles: []
})
export class EstoqueCadastroComponent implements OnInit {

  estoques: Estoque = new Estoque();

  constructor(private service: EstoqueService) { }

  ngOnInit() {
  }

  salvar() {
    this.service.adicionar(this.estoques).subscribe(x => {
      // sucesso
      alert("Cadastrou")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar")
    })
  }
}

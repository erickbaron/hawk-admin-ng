import { Component, OnInit } from '@angular/core';
import { Estoque } from 'app/models/estoque';
import { EstoqueService } from 'app/services/estoque.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estoque-editar',
  templateUrl: './estoque-editar.component.html',
  styles: []
})
export class EstoqueEditarComponent implements OnInit {
  returnUrl: string;
  id: number;

  estoque: Estoque = new Estoque;
  
  constructor(
    private service: EstoqueService,
    private route: ActivatedRoute,
    private router: Router) { }
    estoques:   Estoque[] = [];
    
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
    this.returnUrl = "/estoque";
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

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.estoque = x;
    })
  }
  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.estoques = x;
    }, error => { 
      alert("ERROR");
    });
  }

  alterar(estoque) {
    this.service.alterar(estoque).subscribe( x => {
      this.atualizarDados();
      alert("Registro Alterado com Sucesso")
    },
    error => {
      alert("Não foi possível alterar")
    })
  }
  }

import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'app/models/produto';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styles: []
})
export class ProdutoEditarComponent implements OnInit {
  returnUrl: string;
  produtos: Produto[] = [];

  produto: Produto = new Produto;
  fileNameToUpdate: string;
  file: File;

  id: number

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.returnUrl = '/produto'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.produto = x;
    })
  }


  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.produtos = x;

    }, error => { 
      alert("Erro ao atualizar a página");
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
      console.log(this.file);
    }
  }

editarUpload(){
  this.produto.nomeArquivo = this.fileNameToUpdate;
  this.service.postUpload(this.file, this.fileNameToUpdate)
  .subscribe(
    () => {
      this.atualizarDados();
    }
  );
}


  alterar(produto) {
    this.router.navigateByUrl(this.returnUrl)
    this.atualizarDados();

    this.service.alterar(produto).subscribe( x => {

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

import { Injectable } from '@angular/core';
import { AvaliacaoProduto } from 'app/models/avaliacao-produto';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + 'avaliacao-produto'

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoProdutoService {

  constructor(private http: HttpClient
    ) { }


    obterTodos(): Observable<AvaliacaoProduto[]> {
      return this.http.get<AvaliacaoProduto[]>(url + "/obtertodos");
    }
  
    obterPeloId(id: number): Observable<any> {
      return this.http.get<any>(url + "/obterpeloid?id=" + id); 
    }
  
    adicionar(AvaliacaoProduto: AvaliacaoProduto): Observable<any> {
      return this.http.post(url + "/add", AvaliacaoProduto);
    }
  
    apagar(id: number): Observable<any> {
      return this.http.delete(url + "/delete?id=" + id);
    }
  
    alterar(AvaliacaoProduto): Observable<AvaliacaoProduto> {
      return this.http.put<AvaliacaoProduto>(url + '/update', AvaliacaoProduto);
    }
  
}


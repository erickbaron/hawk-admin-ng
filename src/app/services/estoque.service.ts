import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Estoque } from 'app/models/estoque';

const url = environment.url + "/estoques"
@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  // ajax
  obterTodos(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
}

    adicionar(estoque: Estoque): Observable<any> {
    return this.http.post(url + "/add", estoque);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(estoque): Observable<Estoque> {
    return this.http.put<Estoque>(url + '/update', estoque);
  }

}
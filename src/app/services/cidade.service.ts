import { Injectable } from '@angular/core';
import { Cidade } from 'app/models/cidade';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + '/cidade'

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(cidade: Cidade): Observable<any> {
    return this.http.post(url + "/add", cidade);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(cidade): Observable<Cidade> {
    return this.http.put<Cidade>(url + '/update', cidade);
  }

}

import { Injectable } from '@angular/core';
import { AvaliacaoEmpresa } from 'app/models/avaliacao-empresa';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + '/avaliacao-empresa'

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoEmpresaService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<AvaliacaoEmpresa[]> {
    return this.http.get<AvaliacaoEmpresa[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(AvaliacaoEmpresa: AvaliacaoEmpresa): Observable<any> {
    return this.http.post(url + "/add", AvaliacaoEmpresa);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(AvaliacaoEmpresa): Observable<AvaliacaoEmpresa> {
    return this.http.put<AvaliacaoEmpresa>(url + '/update', AvaliacaoEmpresa);
  }



}

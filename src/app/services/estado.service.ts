import { Injectable } from '@angular/core';
import { Estado } from 'app/models/estado';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = environment.url + '/estado'

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Estado[]> {
    return this.http.get<Estado[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(estado: Estado): Observable<any> {
    return this.http.post(url + "/add", estado);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(estado): Observable<Estado> {
    return this.http.put<Estado>(url + '/update', estado);
  }

}

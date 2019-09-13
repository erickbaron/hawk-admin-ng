import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { environment } from '../../environments/environment';

const url = environment.url + "/categorias"
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  // ajax
  obterTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  alterar(categoria): Observable<Categoria> { 
    return this.http.put<Categoria>(url + '/update', categoria);
  }

  adicionar(categoria: Categoria): Observable<any> {
    return this.http.post(url + "/add", categoria);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }
}

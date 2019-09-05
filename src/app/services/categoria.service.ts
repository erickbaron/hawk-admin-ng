import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Categoria } from 'app/models/categoria';

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

  adicionar(categoria: Categoria): Observable<any> {
    return this.http.post(url + "/add", categoria);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }
}

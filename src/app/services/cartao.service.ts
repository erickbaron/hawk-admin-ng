import { Injectable } from '@angular/core';
import { Cartao } from 'app/models/cartao';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + '/cartao'

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(cartao: Cartao): Observable<any> {
    return this.http.post(url + "/add", cartao);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(cartao): Observable<Cartao> {
    return this.http.put<Cartao>(url + '/update', cartao);
  }

}

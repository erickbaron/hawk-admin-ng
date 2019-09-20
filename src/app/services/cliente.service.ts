import { Injectable } from '@angular/core';
import { Cliente } from 'app/models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + '/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(cliente: Cliente): Observable<any> {
    return this.http.post(url + "/add", cliente);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(cliente): Observable<Cliente> {
    return this.http.put<Cliente>(url + '/update', cliente);
  }

}

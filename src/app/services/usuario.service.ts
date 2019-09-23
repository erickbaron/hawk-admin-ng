import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.url + '/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(login: Usuario): Observable<any> {
    return this.http.post(url + "/add", login);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(login): Observable<Usuario> {
    return this.http.put<Usuario>(url + '/update', login);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Produto } from 'app/models/produto';

const url = environment.url + "/produtos"
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // ajax
  obterTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  alterar(produto): Observable<Produto> {
    return this.http.put<Produto>(url + '/update', produto);
  }

  adicionar(produto: Produto): Observable<any> {
    return this.http.post(url + "/add", produto);
  }

  postUpload(file: File, name: string) {
    const fileToUplaod = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUplaod, name);

    return this.http.post(url + '/upload', formData);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Produto } from 'app/models/produto';
import { ImagemProduto } from 'app/models/imagemProduto';

const url = environment.url + "/produtos"
@Injectable({
  providedIn: 'root'
})
export class ImagemProdutoService {

  constructor(private http: HttpClient) { }

  // ajax
  obterImagem(produtoId: number): Observable<ImagemProduto>{
    const params = new HttpParams()
    .append('produtoId', produtoId.toString())
    return this.http.get<ImagemProduto>(`${url}/obterimagem`, { params });
}
  apagar(): Observable<any>{
    return this.http.delete<any>(`${url}/delete`);
}

  upload(produto: ImagemProduto): Observable<any> {
    return this.http.post(url + "/upload", produto);
  }
}

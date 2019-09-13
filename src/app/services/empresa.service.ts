import { Injectable } from '@angular/core';
import { Empresa } from 'app/models/empresa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

const url = environment.url + '/empresas'
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  // ajax
  obterTodos(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

  adicionar(empresa: Empresa): Observable<any> {
    return this.http.post(url + "/add", empresa);
  }
  
  alterar(empresa): Observable<Empresa> {
    return this.http.put<Empresa>(url + '/update', empresa);
  }
  
  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

} 
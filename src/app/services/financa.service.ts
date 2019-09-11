import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Financa } from '../models/financa';
import { environment } from '../../environments/environment';



const url = environment.url + "/financas"
@Injectable({
  providedIn: 'root'
})
export class FinancaService {

  constructor(private http: HttpClient) { }

  // ajax
  obterTodos(): Observable<Financa[]> {
    return this.http.get<Financa[]>(url + "/obtertodos");
  }

  adicionar(financa: Financa): Observable<any> {
    return this.http.post(url + "/add", financa);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }
}

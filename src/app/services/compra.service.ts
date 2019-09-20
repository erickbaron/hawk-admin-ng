import { Injectable } from '@angular/core';
import { Compra } from 'app/models/compra';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';


const url = environment.url + '/compras'
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  

  

}



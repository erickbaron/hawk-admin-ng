import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'app/models/administrador';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';


const url = environment.url + '/admin'  
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private htt: HttpClient) { }

  
}

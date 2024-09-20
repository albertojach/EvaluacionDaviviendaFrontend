import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteSolicitudService {

  DEMO_URL: string = 'http://localhost:8081/evaluacion/clientes/getClientes';
  constructor(private httpClient: HttpClient) { }

  getClienteSolicitud(): Observable<any>{
    return this.httpClient.get(this.DEMO_URL).pipe(res => res);
  }
}

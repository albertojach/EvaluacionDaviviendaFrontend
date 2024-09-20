import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesoapService {

  DEMO_URL: string = 'http://localhost:8081/evaluacion/consultarinfopersona/findperson?id=';
  URL_FULL: string = '';
  constructor(private httpClient: HttpClient) { }

  getClienteDemo(id: string): Observable<any>{
    this.URL_FULL = this.DEMO_URL.concat(id);
    console.log(this.URL_FULL);
    return this.httpClient.get(this.URL_FULL).pipe(res => res);
  }

}

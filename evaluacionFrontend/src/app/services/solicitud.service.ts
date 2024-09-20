import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  DEMO_URL: string = 'http://localhost:8081/evaluacion/solicitudes/getSolicitudes';
  constructor(private httpClient: HttpClient) { }

  getSolicitudes(): Observable<any>{
    return this.httpClient.get(this.DEMO_URL).pipe(res => res);
  }
}

import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudInterface } from '../interfaces/clienteSolicitud.interface';
import { ClienteSolicitudService } from '../services/cliente-solicitud.service';

@Component({
  selector: 'app-cliente-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './cliente-solicitud.component.html',
  styleUrl: './cliente-solicitud.component.css'
})
export class ClienteSolicitudComponent implements OnInit {

  clienteSolicitudList: ClienteSolicitudInterface[]=[];
  constructor(private clienteSolicitudService: ClienteSolicitudService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getClienteSolicitud();
  }

  getClienteSolicitud(){
    this.clienteSolicitudService.getClienteSolicitud().subscribe({
    next: (result) => {
         console.log('Consuminedo servicio Cliente Solicitud!!')
        this.clienteSolicitudList = result;
    },
    error: (err)=>{
      console.log(err)
    }
    })
  }

}

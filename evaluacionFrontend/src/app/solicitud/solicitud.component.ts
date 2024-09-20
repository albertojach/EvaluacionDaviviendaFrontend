import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../services/solicitud.service';
import { SolicitudInterface } from '../interfaces/solicitud.interface';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent implements OnInit {
  solicitudList: SolicitudInterface[]=[];
  constructor(private solicitudService: SolicitudService){}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getSolicitud();
  }

  getSolicitud(){
    this.solicitudService.getSolicitudes().subscribe({
    next: (result) => {
         console.log('Consuminedo servicio Solicitudes!!')
        this.solicitudList = result;
    },
    error: (err)=>{
      console.log(err)
    }
    })
  }
}

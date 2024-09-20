import { Component, OnInit } from '@angular/core';
import { ClientesoapService } from '../services/clientesoap.service';
import { FindPersonInterface } from '../interfaces/clienteSoap.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  clienteSoapList: FindPersonInterface[]=[];
  data: any;
  route: any;
  idPersona: string = '';
  clientesoapService: ClientesoapService;
  constructor(_clientesoapService: ClientesoapService, _route: ActivatedRoute){
    this.clientesoapService = _clientesoapService;
    this.route = _route;
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //this.getClienteSoap();
    this.route.queryParams
      .subscribe((params: Params) => {
        if(params['id'] != null){
        this.idPersona = params['id'];
        console.log(this.idPersona);
        if (this.idPersona != ''){
          this.getClienteSoap(this.idPersona);
        }
      }
      });  
  }

  getClienteSoap(id:string){
    this.clientesoapService.getClienteDemo(id).subscribe({
    next: (result) => {
         console.log('Consuminedo servicio Cliente Soap')
         this.clienteSoapList = result;
         this.data = Object.values(this.clienteSoapList);
        console.log('Response servicio Cliente Soap!!')
    },
    error: (err)=>{
      console.log(err)
    }
    })
  }

  /*constructor(private router: Router){
    this.urlTree = this.router.parseUrl(this.router.url);
    this.idPersona = this.urlTree.queryParams['id'];
    console.warn('obtener parametro:' + this.idPersona);
    if (this.idPersona != ''){
      this.getClienteSoap(this.idPersona);
    }
  }*/
}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteSolicitudComponent } from './cliente-solicitud/cliente-solicitud.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

export const routes: Routes = [
    //{path: 'cliente-demo-soap', component: HomeComponent},
    {path: 'cliente-soap-demo', component: HomeComponent},
    {path: 'cliente-solicitud', component: ClienteSolicitudComponent},
    {path: 'solicitudes', component: SolicitudComponent},
];

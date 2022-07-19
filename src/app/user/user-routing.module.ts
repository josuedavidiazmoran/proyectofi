import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoSolicitudComponent } from './estado-solicitud/estado-solicitud.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {path: 'solicitud',component: SolicitudComponent},
  {path: 'estado-solicitud',component: EstadoSolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

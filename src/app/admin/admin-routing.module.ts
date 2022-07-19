import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { ValidarSolicitudComponent } from './validar-solicitud/validar-solicitud.component';

const routes: Routes = [
  { path: 'validar-solicitud', component: ValidarSolicitudComponent },
  { path: 'asignar-tutor', component: AsignarTutorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { ValidarSolicitudComponent } from './validar-solicitud/validar-solicitud.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    AsignarTutorComponent,
    ValidarSolicitudComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UtilsModule
  ]
})
export class AdminModule { }

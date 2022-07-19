import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { EstadoSolicitudComponent } from './estado-solicitud/estado-solicitud.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    SolicitudComponent,
    EstadoSolicitudComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UtilsModule
  ]
})
export class UserModule { }

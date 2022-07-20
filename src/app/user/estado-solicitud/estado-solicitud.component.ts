import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-solicitud',
  templateUrl: './estado-solicitud.component.html',
  styleUrls: ['./estado-solicitud.component.css']
})
export class EstadoSolicitudComponent implements OnInit {

  public estudiante: string = 'Josue David Diaz Moran';
  public codigo: string = '202010349';
  documentos = [
    { id: 1, nombre: 'Carta de aceptación.pdf', desc: 'Descripcion de documento', com: 'Todo bien', est: 1 },
    { id: 2, nombre: 'Plan de prácticas.pdf', desc: 'Descripcion de documento', com: 'Todo bien', est: 1 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

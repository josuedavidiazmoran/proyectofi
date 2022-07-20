import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.css']
})
export class ValidarSolicitudComponent implements OnInit {

  public titulo: string = 'Validar Solicitud';
  // public estudiante: string = 'Josue David Diaz Moran';
  // public codigo: string = '202010349';
  public personas = [
    { id: 1, name: 'Josue David Diaz Moran', date: '01/01/2022', status: 1 },
    { id: 2, name: 'Juanito Alcachofa', date: '01/01/2022', status: 1 },
    { id: 3, name: 'Nombre Apellido', date: '01/01/2022', status: 1 },
    { id: 4, name: 'nombrexd', date: '01/01/2022', status: 1 },
    { id: 5, name: 'nombrexd', date: '01/01/2022', status: 1 },
  ]
  public tutores = [
    {id: 1, name:'asin'},
    {id: 2, name:'reyna'},
    {id: 3, name:'loaiza'},
    {id: 4, name:'diana'},
    {id: 5, name:'carol'},
    {id: 6, name:'erika'},
  ]

  constructor() { }

  ngOnInit(): void {
    // console.log(this.body.dni)
  }

}

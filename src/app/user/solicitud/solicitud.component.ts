import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  public estudiante: string = 'Josue David Diaz Moran';
  public codigo: string = '202010349';

  constructor() { }

  ngOnInit(): void {
  }

}

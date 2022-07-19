import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sistema: string = 'Sistema de Practicas Pre Profesionales';
  public name: string = 'josue';

  constructor() { 
  }

  ngOnInit(): void {
  }

}

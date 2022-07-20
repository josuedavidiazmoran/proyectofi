import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new User
  usuarios = [
    { name: 'admin', password: '123', rol: 'admin' },
    { name: 'user', password: '123', rol: 'user' }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // console.log(this.usuario)
    if (this.usuario.user == 'user' && this.usuario.password == '123') {
      console.log('eres usuario')
      this.router.navigate(['/user/solicitud'])
    } else {
      if (this.usuario.user == 'admin' && this.usuario.password == '123') {
        console.log('eres admin')
        this.router.navigate(['/admin/validar-solicitud'])
      }
    }
  }

}

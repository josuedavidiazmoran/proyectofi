import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/login/login.component';
import { PasswordComponent } from './core/password/password.component';
import { UtilsModule } from './utils/utils.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    UtilsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

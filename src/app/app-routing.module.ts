import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./content/pages/inicio/inicio.module').then(m => m.InicioModule)},
  {
    path: 'manutencao-usuario', loadChildren: () => import('./content/pages/usuario/usuario.module').then(m => m.UsuarioModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard], canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

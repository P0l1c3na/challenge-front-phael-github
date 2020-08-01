import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RelatorioComponent} from "./relatorio/relatorio.component";
import {ManutencaoUsuarioComponent} from "./manutencao-usuario/manutencao-usuario.component";
import {AuthGuard} from "../../../core/guards/auth.guard";
import {RelatorioGuard} from "../../../core/guards/relatorio.guard";


const routes: Routes = [
  {
    path: '', component: ManutencaoUsuarioComponent
  },
  {
    path: 'relatorio', component: RelatorioComponent,
    canActivate: [RelatorioGuard],
    canActivateChild:[AuthGuard],
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {RelatorioComponent} from './relatorio/relatorio.component';
import {ManutencaoUsuarioComponent} from './manutencao-usuario/manutencao-usuario.component';
import {SharedModule} from "../../../shared/shared.module";
import {CoreModule} from "../../../core/core.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import {ComponentsModule} from "../../components/components.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    RelatorioComponent,
    ManutencaoUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    CoreModule,
    MatExpansionModule,
    MatDialogModule,
    ComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UsuarioModule {
}

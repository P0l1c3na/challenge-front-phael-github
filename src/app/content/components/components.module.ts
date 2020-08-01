import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManutencaoUsuarioAdminComponent} from "./manutencao-usuario-admin/manutencao-usuario-admin.component";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ManutencaoUsuarioAdminComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule,
    RouterModule
  ],
  schemas: [
    ManutencaoUsuarioAdminComponent
  ],
  exports: [
    ManutencaoUsuarioAdminComponent
  ]
})
export class ComponentsModule {
}

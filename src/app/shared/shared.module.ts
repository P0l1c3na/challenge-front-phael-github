import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoUsuarioComponent} from './components/info-usuario/info-usuario.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    InfoUsuarioComponent
  ],
  entryComponents: [
    InfoUsuarioComponent
  ],
  exports: [
    InfoUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}

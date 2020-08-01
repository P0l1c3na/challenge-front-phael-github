import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";
import {ProgressLoaderComponent} from "./layout/progress-loader/progress-loader.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    HeaderComponent,
    ProgressLoaderComponent
  ],
  exports: [
    HeaderComponent,
    ProgressLoaderComponent
  ],
  schemas: [
    HeaderComponent,
    ProgressLoaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    MatProgressBarModule
  ]
})
export class CoreModule { }

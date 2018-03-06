import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MatModule { }

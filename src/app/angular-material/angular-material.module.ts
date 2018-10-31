import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
  } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  declarations: []
})
export class AngularMaterialModule {}

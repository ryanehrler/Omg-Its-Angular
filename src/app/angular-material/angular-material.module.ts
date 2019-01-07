import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
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
    MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class AngularMaterialModule {}

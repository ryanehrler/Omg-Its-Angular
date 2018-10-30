import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [MatToolbarModule, MatButtonModule],
  declarations: []
})
export class AngularMaterialModule {}

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class CoreModule {}

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent, SideNavComponent],
  declarations: [HeaderComponent, SideNavComponent]
})
export class CoreModule {}

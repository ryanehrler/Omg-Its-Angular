import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule, SharedModule],
  exports: [HeaderComponent, SideNavComponent],
  declarations: [HeaderComponent, SideNavComponent]
})
export class CoreModule {}

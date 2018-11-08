import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule, SharedModule],
  exports: [HeaderComponent, SideNavComponent],
  declarations: [HeaderComponent, SideNavComponent],
  providers: []
})
export class CoreModule {}

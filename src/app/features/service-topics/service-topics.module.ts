import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProvidedInComponent } from './provided-in/provided-in.component';
import { ServiceTopicsRoutingModule } from './service-topics-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ServiceTopicsRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  declarations: [ProvidedInComponent]
})
export class ServiceTopicsModule {}

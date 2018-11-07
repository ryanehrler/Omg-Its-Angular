import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { EmojifyModule } from 'angular-emojify';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { FramedImageComponent } from './components/framed-image/framed-image.component';
import { FramelessImageComponent } from './components/frameless-image/frameless-image.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, EmojifyModule, AngularMaterialModule],
  exports: [
    EmojifyModule,
    FramelessImageComponent,
    FramedImageComponent,
    ExternalLinkComponent
  ],
  declarations: [
    FramelessImageComponent,
    FramedImageComponent,
    ExternalLinkComponent
  ]
})
export class SharedModule {}

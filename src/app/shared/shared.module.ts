import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { EmojifyModule } from 'angular-emojify';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { FramedImageComponent } from './components/framed-image/framed-image.component';
import { FramelessImageComponent } from './components/frameless-image/frameless-image.component';
import { KeyComponent } from './components/key/key.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { NgxHighlightJsModule } from 'ngx-syntax-highlighter';
import { ProTipComponent } from './components/pro-tip/pro-tip.component';
import { BodyContentComponent } from './components/body-content/body-content.component';

@NgModule({
  imports: [
    CommonModule,
    EmojifyModule,
    AngularMaterialModule,
    LazyLoadImageModule
  ],
  exports: [
    EmojifyModule,
    NgxHighlightJsModule,
    FramelessImageComponent,
    FramedImageComponent,
    ExternalLinkComponent,
    ProTipComponent,
    KeyComponent,
    BodyContentComponent
  ],
  declarations: [
    FramelessImageComponent,
    FramedImageComponent,
    ExternalLinkComponent,
    ProTipComponent,
    KeyComponent,
    BodyContentComponent
  ]
})
export class SharedModule {}

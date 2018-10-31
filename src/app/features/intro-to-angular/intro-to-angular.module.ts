import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroToAngularRoutingModule } from './intro-to-angular-routing.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  imports: [
    CommonModule,
    IntroToAngularRoutingModule
  ],
  declarations: [GettingStartedComponent]
})
export class IntroToAngularModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroToAngularRoutingModule } from './intro-to-angular-routing.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TargetAudienceComponent } from './target-audience/target-audience.component';
import { SettingUpEnvironmentComponent } from './setting-up-environment/setting-up-environment.component';
import { AngularBuildingBlocksComponent } from './angular-building-blocks/angular-building-blocks.component';
import { WhyCoreModuleComponent } from './why-core-module/why-core-module.component';
import { WhySharedModuleComponent } from './why-shared-module/why-shared-module.component';
import { AngularModulesComponent } from './angular-modules/angular-modules.component';

@NgModule({
  imports: [
    CommonModule,
    IntroToAngularRoutingModule
  ],
  declarations: [GettingStartedComponent, TargetAudienceComponent, SettingUpEnvironmentComponent, AngularBuildingBlocksComponent, WhyCoreModuleComponent, WhySharedModuleComponent, AngularModulesComponent]
})
export class IntroToAngularModule { }

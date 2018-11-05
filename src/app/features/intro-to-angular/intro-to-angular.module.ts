import { AngularBuildingBlocksComponent } from './angular-building-blocks/angular-building-blocks.component';
import { AngularModulesComponent } from './angular-modules/angular-modules.component';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroComponent } from './intro/intro.component';
import { IntroToAngularRoutingModule } from './intro-to-angular-routing.module';
import { NgModule } from '@angular/core';
import { SettingUpEnvironmentComponent } from './setting-up-environment/setting-up-environment.component';
import { WhyCoreModuleComponent } from './why-core-module/why-core-module.component';
import { WhySharedModuleComponent } from './why-shared-module/why-shared-module.component';


@NgModule({
  imports: [CommonModule, IntroToAngularRoutingModule],
  declarations: [
    GettingStartedComponent,
    SettingUpEnvironmentComponent,
    AngularBuildingBlocksComponent,
    WhyCoreModuleComponent,
    WhySharedModuleComponent,
    AngularModulesComponent,
    IntroComponent
  ]
})
export class IntroToAngularModule {}

import { AngularBuildingBlocksComponent } from './angular-building-blocks/angular-building-blocks.component';
import { AngularModulesComponent } from './angular-modules/angular-modules.component';
import { CreatingNewProjectComponent } from './creating-new-project/creating-new-project.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingUpEnvironmentComponent } from './setting-up-environment/setting-up-environment.component';
import { SettingUpVscodeComponent } from './setting-up-vscode/setting-up-vscode.component';
import { WhyCoreModuleComponent } from './why-core-module/why-core-module.component';
import { WhySharedModuleComponent } from './why-shared-module/why-shared-module.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'setting-up-environment', component: SettingUpEnvironmentComponent },
  { path: 'setting-up-vscode', component: SettingUpVscodeComponent },
  { path: 'creating-new-project', component: CreatingNewProjectComponent },
  {
    path: 'angular-building-blocks',
    component: AngularBuildingBlocksComponent
  },
  { path: 'angular-modules', component: AngularModulesComponent },
  { path: 'why-core', component: WhyCoreModuleComponent },
  { path: 'why-shared', component: WhySharedModuleComponent },
  { path: '', redirectTo: 'setting-up-environment', pathMatch: 'full' },
  { path: '**', redirectTo: 'setting-up-environment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroToAngularRoutingModule {}

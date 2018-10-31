import { GettingStartedComponent } from './getting-started/getting-started.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "getting-started", component: GettingStartedComponent },
  { path: "", redirectTo: "getting-started", pathMatch: "full" },
  { path: "**", redirectTo: "getting-started", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroToAngularRoutingModule {}

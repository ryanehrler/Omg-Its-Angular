import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren:
      './features/intro-to-angular/intro-to-angular.module#IntroToAngularModule'
  },
  {
    path: 'service-topics',
    loadChildren:
      './features/service-topics/service-topics.module#ServiceTopicsModule'
  },
  { path: '', pathMatch: 'full', redirectTo: 'intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

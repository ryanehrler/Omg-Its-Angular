import { NgModule } from '@angular/core';
import { ProvidedInComponent } from './provided-in/provided-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'provided-in', component: ProvidedInComponent },
  { path: '', redirectTo: 'provided-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'provided-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTopicsRoutingModule {}

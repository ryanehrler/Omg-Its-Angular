import { CommonModule } from '@angular/common';
import { EmojifyModule } from 'angular-emojify';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, EmojifyModule],
  exports: [EmojifyModule],
  declarations: []
})
export class SharedModule {}

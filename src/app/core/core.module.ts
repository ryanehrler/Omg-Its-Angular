import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {
  HighlightJsConfig,
  Language,
  NgxHighlightJsModule,
  SyntaxStyle
  } from 'ngx-syntax-highlighter';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const syntaxHighlighterConfig: HighlightJsConfig = {
  style: SyntaxStyle.GOOGLECODE,
  languages: [
    Language.TYPESCRIPT,
    Language.SCSS,
    Language.HTMLBARS,
    Language.BASH
  ]
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    SharedModule,
    NgxHighlightJsModule.forRoot(syntaxHighlighterConfig)
  ],
  exports: [HeaderComponent, SideNavComponent],
  declarations: [HeaderComponent, SideNavComponent],
  providers: []
})
export class CoreModule {}

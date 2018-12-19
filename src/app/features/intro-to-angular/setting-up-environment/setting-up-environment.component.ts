import { Component, OnInit } from '@angular/core';
import { Language } from 'ngx-syntax-highlighter';

@Component({
  selector: 'app-setting-up-environment',
  templateUrl: './setting-up-environment.component.html',
  styleUrls: ['./setting-up-environment.component.scss']
})
export class SettingUpEnvironmentComponent implements OnInit {
  languages = Language;
  constructor() {}

  ngOnInit() {}
}

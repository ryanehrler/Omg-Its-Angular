import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services';

@Component({
  selector: 'app-setting-up-environment',
  templateUrl: './setting-up-environment.component.html',
  styleUrls: ['./setting-up-environment.component.scss']
})
export class SettingUpEnvironmentComponent implements OnInit {
  constructor(public imageService: ImageService) {}

  ngOnInit() {}
}

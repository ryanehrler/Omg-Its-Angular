import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';
import { SyntaxStyle } from 'ngx-syntax-highlighter';

@Component({
  selector: 'app-angular-building-blocks',
  templateUrl: './angular-building-blocks.component.html',
  styleUrls: ['./angular-building-blocks.component.scss']
})
export class AngularBuildingBlocksComponent implements OnInit {
  styles = SyntaxStyle;

  constructor() {}

  ngOnInit() {}
}

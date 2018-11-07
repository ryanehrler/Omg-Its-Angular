import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-frameless-image',
  templateUrl: './frameless-image.component.html',
  styleUrls: ['./frameless-image.component.scss']
})
export class FramelessImageComponent implements OnInit {
  @Input() src: string;
  @HostBinding('class.frameless-image') framelessImageClass = true;

  constructor() {}

  ngOnInit() {}
}

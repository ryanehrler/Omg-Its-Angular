import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-framed-image',
  templateUrl: './framed-image.component.html',
  styleUrls: ['./framed-image.component.scss']
})
export class FramedImageComponent implements OnInit {
  @Input() src: string;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services';

@Component({
  selector: 'app-provided-in',
  templateUrl: './provided-in.component.html',
  styleUrls: ['./provided-in.component.scss']
})
export class ProvidedInComponent implements OnInit {
  constructor(public imageService: ImageService) {}

  ngOnInit() {}
}

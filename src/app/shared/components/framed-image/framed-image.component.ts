import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
  } from '@angular/core';

@Component({
  selector: 'app-framed-image',
  templateUrl: './framed-image.component.html',
  styleUrls: ['./framed-image.component.scss']
})
export class FramedImageComponent implements OnInit {
  maxWidth = 100;
  loading = true;

  @Input() src: string;

  @ViewChild('img') img: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  imageLoad(success: boolean) {
    this.loading = false;

    // Minus 32 is from the padding that mat-card adds in, if we don't subtract it then images are stretched slightly
    // and the text is becomes burry.
    this.maxWidth = this.img.nativeElement.naturalWidth - 32;

    // Apparently ng-lazyload-image library calls this function outside of Angular's knowledge
    // so we tell Angular to detect changes.
    this.cdr.detectChanges();
  }
}

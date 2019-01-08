import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramedImageComponent } from './framed-image.component';

describe('FramedImageComponent', () => {
  let component: FramedImageComponent;
  let fixture: ComponentFixture<FramedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FramedImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

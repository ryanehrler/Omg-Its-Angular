import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramelessImageComponent } from './frameless-image.component';

describe('FramelessImageComponent', () => {
  let component: FramelessImageComponent;
  let fixture: ComponentFixture<FramelessImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramelessImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramelessImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

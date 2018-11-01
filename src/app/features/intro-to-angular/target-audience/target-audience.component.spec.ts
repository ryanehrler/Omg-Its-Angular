import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAudienceComponent } from './target-audience.component';

describe('TargetAudienceComponent', () => {
  let component: TargetAudienceComponent;
  let fixture: ComponentFixture<TargetAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAudienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySharedModuleComponent } from './why-shared-module.component';

describe('WhySharedModuleComponent', () => {
  let component: WhySharedModuleComponent;
  let fixture: ComponentFixture<WhySharedModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhySharedModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySharedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

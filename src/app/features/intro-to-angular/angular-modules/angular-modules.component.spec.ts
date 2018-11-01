import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularModulesComponent } from './angular-modules.component';

describe('AngularModulesComponent', () => {
  let component: AngularModulesComponent;
  let fixture: ComponentFixture<AngularModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

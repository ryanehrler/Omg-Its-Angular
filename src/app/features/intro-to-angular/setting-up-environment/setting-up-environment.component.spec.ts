import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpEnvironmentComponent } from './setting-up-environment.component';

describe('SettingUpEnvironmentComponent', () => {
  let component: SettingUpEnvironmentComponent;
  let fixture: ComponentFixture<SettingUpEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingUpEnvironmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUpEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

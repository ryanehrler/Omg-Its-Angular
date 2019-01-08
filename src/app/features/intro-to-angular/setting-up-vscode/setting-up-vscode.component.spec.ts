import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpVscodeComponent } from './setting-up-vscode.component';

describe('SettingUpVscodeComponent', () => {
  let component: SettingUpVscodeComponent;
  let fixture: ComponentFixture<SettingUpVscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingUpVscodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUpVscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

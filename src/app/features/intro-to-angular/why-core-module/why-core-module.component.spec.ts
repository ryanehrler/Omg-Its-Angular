import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCoreModuleComponent } from './why-core-module.component';

describe('WhyCoreModuleComponent', () => {
  let component: WhyCoreModuleComponent;
  let fixture: ComponentFixture<WhyCoreModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCoreModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCoreModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

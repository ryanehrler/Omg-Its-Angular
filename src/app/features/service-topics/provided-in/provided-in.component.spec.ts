import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedInComponent } from './provided-in.component';

describe('ProvidedInComponent', () => {
  let component: ProvidedInComponent;
  let fixture: ComponentFixture<ProvidedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

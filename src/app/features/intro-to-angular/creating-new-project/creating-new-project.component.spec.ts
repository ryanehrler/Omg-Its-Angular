import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingNewProjectComponent } from './creating-new-project.component';

describe('CreatingNewProjectComponent', () => {
  let component: CreatingNewProjectComponent;
  let fixture: ComponentFixture<CreatingNewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingNewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

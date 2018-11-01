import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBuildingBlocksComponent } from './angular-building-blocks.component';

describe('AngularBuildingBlocksComponent', () => {
  let component: AngularBuildingBlocksComponent;
  let fixture: ComponentFixture<AngularBuildingBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBuildingBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

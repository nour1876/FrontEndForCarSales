import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInspectionComponent } from './list-inspection.component';

describe('ListInspectionComponent', () => {
  let component: ListInspectionComponent;
  let fixture: ComponentFixture<ListInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

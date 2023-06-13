import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInspectionComponent } from './my-inspection.component';

describe('MyInspectionComponent', () => {
  let component: MyInspectionComponent;
  let fixture: ComponentFixture<MyInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

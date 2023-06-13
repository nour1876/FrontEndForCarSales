import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedInspectionComponent } from './recieved-inspection.component';

describe('RecievedInspectionComponent', () => {
  let component: RecievedInspectionComponent;
  let fixture: ComponentFixture<RecievedInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedInspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievedInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

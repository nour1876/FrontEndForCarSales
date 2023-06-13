import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnnonceComponent } from './my-annonce.component';

describe('MyAnnonceComponent', () => {
  let component: MyAnnonceComponent;
  let fixture: ComponentFixture<MyAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

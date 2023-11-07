import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubsComponent } from './car-subs.component';

describe('CarSubsComponent', () => {
  let component: CarSubsComponent;
  let fixture: ComponentFixture<CarSubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSubsComponent]
    });
    fixture = TestBed.createComponent(CarSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubsCardComponent } from './car-subs-card.component';

describe('CarSubsCardComponent', () => {
  let component: CarSubsCardComponent;
  let fixture: ComponentFixture<CarSubsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSubsCardComponent]
    });
    fixture = TestBed.createComponent(CarSubsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

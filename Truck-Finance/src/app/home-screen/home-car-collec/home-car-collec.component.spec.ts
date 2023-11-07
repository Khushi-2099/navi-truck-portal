import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarCollecComponent } from './home-car-collec.component';

describe('HomeCarCollecComponent', () => {
  let component: HomeCarCollecComponent;
  let fixture: ComponentFixture<HomeCarCollecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCarCollecComponent]
    });
    fixture = TestBed.createComponent(HomeCarCollecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

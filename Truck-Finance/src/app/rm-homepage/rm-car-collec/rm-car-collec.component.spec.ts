import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmCarCollecComponent } from './rm-car-collec.component';

describe('RmCarCollecComponent', () => {
  let component: RmCarCollecComponent;
  let fixture: ComponentFixture<RmCarCollecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmCarCollecComponent]
    });
    fixture = TestBed.createComponent(RmCarCollecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

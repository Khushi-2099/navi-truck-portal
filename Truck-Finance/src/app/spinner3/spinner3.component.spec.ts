import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner3Component } from './spinner3.component';

describe('Spinner3Component', () => {
  let component: Spinner3Component;
  let fixture: ComponentFixture<Spinner3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spinner3Component]
    });
    fixture = TestBed.createComponent(Spinner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

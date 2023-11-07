import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Howitworks2Component } from './howitworks2.component';

describe('Howitworks2Component', () => {
  let component: Howitworks2Component;
  let fixture: ComponentFixture<Howitworks2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Howitworks2Component]
    });
    fixture = TestBed.createComponent(Howitworks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

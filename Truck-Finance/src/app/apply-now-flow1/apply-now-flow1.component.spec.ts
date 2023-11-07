import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowFlow1Component } from './apply-now-flow1.component';

describe('ApplyNowFlow1Component', () => {
  let component: ApplyNowFlow1Component;
  let fixture: ComponentFixture<ApplyNowFlow1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyNowFlow1Component]
    });
    fixture = TestBed.createComponent(ApplyNowFlow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

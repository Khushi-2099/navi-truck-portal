import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowPendingComponent } from './apply-now-pending.component';

describe('ApplyNowPendingComponent', () => {
  let component: ApplyNowPendingComponent;
  let fixture: ComponentFixture<ApplyNowPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyNowPendingComponent]
    });
    fixture = TestBed.createComponent(ApplyNowPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

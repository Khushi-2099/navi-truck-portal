import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarificationLoginComponent } from './varification-login.component';

describe('VarificationLoginComponent', () => {
  let component: VarificationLoginComponent;
  let fixture: ComponentFixture<VarificationLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VarificationLoginComponent]
    });
    fixture = TestBed.createComponent(VarificationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

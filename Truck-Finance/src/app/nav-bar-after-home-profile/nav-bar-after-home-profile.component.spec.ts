import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAfterHomeProfileComponent } from './nav-bar-after-home-profile.component';

describe('NavBarAfterHomeProfileComponent', () => {
  let component: NavBarAfterHomeProfileComponent;
  let fixture: ComponentFixture<NavBarAfterHomeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarAfterHomeProfileComponent]
    });
    fixture = TestBed.createComponent(NavBarAfterHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

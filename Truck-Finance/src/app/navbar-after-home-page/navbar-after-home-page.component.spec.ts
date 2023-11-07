import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAfterHomePageComponent } from './navbar-after-home-page.component';

describe('NavbarAfterHomePageComponent', () => {
  let component: NavbarAfterHomePageComponent;
  let fixture: ComponentFixture<NavbarAfterHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAfterHomePageComponent]
    });
    fixture = TestBed.createComponent(NavbarAfterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
